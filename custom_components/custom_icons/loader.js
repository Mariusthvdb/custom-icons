const DOMAIN = "custom_icons";
const ICON_PREFIX = "cli";
const ICON_CACHE = {};

/**
 * Fetch a single icon by name
 * @param {string} iconName - Icon name (e.g., "my-icon" or "subfolder/my-icon")
 * @returns {Promise<string|null>} SVG content or null if failed
 */
const fetchIcon = async (iconName) => {
  if (ICON_CACHE[iconName]) {
    return ICON_CACHE[iconName];
  }

  try {
    const response = await fetch(`/${DOMAIN}/icons/${iconName}.svg`);
    if (!response.ok) {
      console.warn(`[${ICON_PREFIX}] Failed to load icon: ${iconName} (HTTP ${response.status})`);
      return null;
    }

    const svg = await response.text();

    // Security: Validate SVG
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, "text/xml");
    
    if (doc.getElementsByTagName("parsererror").length > 0) {
      console.warn(`[${ICON_PREFIX}] Invalid XML in icon: ${iconName}`);
      return null;
    }

    const svgEl = doc.querySelector("svg");
    if (!svgEl) {
      console.warn(`[${ICON_PREFIX}] No <svg> element found in: ${iconName}`);
      return null;
    }

    // Check for event handlers (onclick, onload, etc.)
    const hasEventHandlers = Array.from(svgEl.attributes).some((a) =>
      a.name.toLowerCase().startsWith("on")
    );
    if (hasEventHandlers) {
      console.warn(`[${ICON_PREFIX}] SVG contains event handlers, blocked: ${iconName}`);
      return null;
    }

    // Check for script tags
    if (svgEl.getElementsByTagName("script").length > 0) {
      console.warn(`[${ICON_PREFIX}] SVG contains script tags, blocked: ${iconName}`);
      return null;
    }

    ICON_CACHE[iconName] = svg;
    return svg;
  } catch (error) {
    console.error(`[${ICON_PREFIX}] Error loading icon "${iconName}":`, error);
    return null;
  }
};

/**
 * Get list of all available icons
 * @returns {Promise<Array>} Array of icon objects with name and keywords
 */
const getIconList = async () => {
  try {
    const response = await fetch(`/${DOMAIN}/list`);
    if (!response.ok) {
      console.warn(`[${ICON_PREFIX}] Failed to load icon list`);
      return [];
    }
    const icons = await response.json();
    
    // Add prefix to each icon name for display
    return icons.map((icon) => ({
      ...icon,
      displayName: `${ICON_PREFIX}:${icon.name}`,
    }));
  } catch (error) {
    console.error(`[${ICON_PREFIX}] Error loading icon list:`, error);
    return [];
  }
};

// Register custom icon set with Home Assistant
if (!window.customIcons) {
  window.customIcons = {};
}

window.customIcons[ICON_PREFIX] = {
  getIcon: fetchIcon,
  getIconList: getIconList,
};

console.log(`[${ICON_PREFIX}] Custom icons loader initialized`);
