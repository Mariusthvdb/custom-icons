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
