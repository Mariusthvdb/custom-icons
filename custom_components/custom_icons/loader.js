/**
 * Custom Local Icons - Simple SVG Icon Loader
 * Registers cli: icon prefix for Home Assistant
 */

const DOMAIN = "custom_local_icons";
const PREFIX = "cli";
const CACHE = {};

/**
 * Security check - prevent XSS attacks
 */
function validateSvg(svg) {
  // Check for event handlers (onclick, onload, etc.)
  const hasEventHandlers = Array.from(svg.attributes).some((a) =>
    a.name.toLowerCase().startsWith("on")
  );
  if (hasEventHandlers) {
    console.warn(`[${PREFIX}] Blocked: SVG contains event handlers`);
    return false;
  }

  // Check for script tags
  if (svg.getElementsByTagName("script").length > 0) {
    console.warn(`[${PREFIX}] Blocked: SVG contains scripts`);
    return false;
  }

  return true;
}

/**
 * Extract viewBox and paths from SVG
 */
function parseSvg(svgText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgText, "text/xml");
  
  // Check for XML parse errors
  if (doc.getElementsByTagName("parsererror").length) {
    console.warn(`[${PREFIX}] Invalid XML`);
    return null;
  }
  
  const svg = doc.querySelector("svg");
  if (!svg) {
    console.warn(`[${PREFIX}] No SVG element found`);
    return null;
  }

  // Validate security
  if (!validateSvg(svg)) {
    return null;
  }
  
  const viewBox = svg.getAttribute("viewBox") || "0 0 24 24";
  const paths = Array.from(svg.querySelectorAll("path"))
    .map(p => p.getAttribute("d"))
    .filter(Boolean)
    .join(" ");
  
  if (!paths) {
    console.warn(`[${PREFIX}] No paths found in SVG`);
    return null;
  }

  return { viewBox, path: paths };
}

/**
 * Fetch icon SVG and parse it
 */
async function getIcon(name) {
  if (CACHE[name]) return CACHE[name];
  
  try {
    const res = await fetch(`/${DOMAIN}/icons/${name}.svg`);
    if (!res.ok) {
      console.warn(`[${PREFIX}] Icon not found: ${name}`);
      return null;
    }
    
    const svg = await res.text();
    const icon = parseSvg(svg);
    
    if (icon) CACHE[name] = icon;
    return icon;
  } catch (e) {
    console.error(`[${PREFIX}] Error loading ${name}:`, e);
    return null;
  }
}

/**
 * Get list of all available icons
 */
async function getIconList() {
  try {
    const res = await fetch(`/${DOMAIN}/list`);
    return res.ok ? await res.json() : [];
  } catch (e) {
    console.error(`[${PREFIX}] Error loading icon list:`, e);
    return [];
  }
}

// Register icon set
window.customIcons = window.customIcons || {};
window.customIcons[PREFIX] = { getIcon, getIconList };

console.log(`[${PREFIX}] Loaded - use icons with '${PREFIX}:icon-name'`);
