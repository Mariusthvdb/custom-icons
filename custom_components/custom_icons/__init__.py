import logging
from os import walk, path

from homeassistant.components.frontend import add_extra_js_url
from homeassistant.components.http.view import HomeAssistantView
from homeassistant.components.http import StaticPathConfig

LOGGER = logging.getLogger(__name__)

DOMAIN = "custom_icons"
LOADER_URL = f"/{DOMAIN}/loader.js"
LOADER_PATH = f"custom_components/{DOMAIN}/loader.js"

ICONS_URL = f"/{DOMAIN}/icons"
ICONS_LIST_URL = f"/{DOMAIN}/list"


class IconListingView(HomeAssistantView):
    requires_auth = False

    def __init__(self, url, icon_path):
        self.url = url
        self.icon_path = icon_path
        self.name = "Icon List"

    async def get(self, request):
        icons = []
        for dirpath, _, filenames in walk(self.icon_path):
            for filename in filenames:
                if filename.endswith(".svg"):
                    rel_path = path.relpath(dirpath, self.icon_path)
                    icon_name = filename[:-4]  # Remove .svg extension
                    if rel_path == ".":
                        icons.append({"name": icon_name})
                    else:
                        icons.append({"name": f"{rel_path}/{icon_name}"})
        return self.json(icons)


async def async_setup(hass, config):
    return True


async def async_setup_entry(hass, entry):
    icon_path = hass.config.path(entry.data["icons_path"])

    # Register static path for icons
    static_paths = [
        StaticPathConfig(LOADER_URL, hass.config.path(LOADER_PATH), True),
        StaticPathConfig(ICONS_URL, icon_path, True),
    ]
    await hass.http.async_register_static_paths(static_paths)

    # Register icon list endpoint
    hass.http.register_view(IconListingView(ICONS_LIST_URL, icon_path))

    # Inject loader script
    add_extra_js_url(hass, LOADER_URL)

    LOGGER.info("Custom Icons loaded from %s", entry.data["icons_path"])
    return True


async def async_remove_entry(hass, entry):
    return True
