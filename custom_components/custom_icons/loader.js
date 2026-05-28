const DOMAIN = "custom_icons";
const ICON_CACHE = {};

const fetchIcon = async (iconName) => {
  if (ICON_CACHE[iconName]) {
    return ICON_CACHE[iconName];
  }

  const response = await fetch(`/${DOMAIN}/icons/${iconName}.svg`);
  if (!response.ok) {
    console.warn(`Failed to load icon: ${iconName}`);
    return null;
  }

  const svg = await response.text();

  // Security: Sanitize SVG to prevent XSS
  const parser = new DOMParser();
  const doc = parser.parseFromString(svg, "text/svg");
  
  if (!doc || !doc.querySelector("svg")) {
    console.warn(`Invalid SVG: ${iconName}`);
    return null;
  }

  const svgEl = doc.querySelector("svg");

  // Check for event handlers (onclick, onload, etc.)
  const hasEventHandlers = Array.from(svgEl.attributes).some((a) =>
    a.name.startsWith("on")
  );
  if (hasEventHandlers) {
    console.warn(`SVG contains event handlers, blocked: ${iconName}`);
    return null;
  }

  // Check for script tags
  if (svgEl.getElementsByTagName("script").length > 0) {
    console.warn(`SVG contains script tags, blocked: ${iconName}`);
    return null;
  }

  ICON_CACHE[iconName] = svg;
  return svg;
};

const getIconList = async () => {
  const response = await fetch(`/${DOMAIN}/list`);
  if (!response.ok) {
    console.warn("Failed to load icon list");
    return [];
  }
  return response.json();
};

// Register custom icon set
if (!window.customIcons) {
  window.customIcons = {};
}

window.customIcons.cil = {
  getIcon: fetchIcon,
  getIconList: getIconList,
};
