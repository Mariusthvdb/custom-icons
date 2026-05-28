import logging
import voluptuous as vol

from homeassistant import config_entries
from homeassistant.core import callback

LOGGER = logging.getLogger(__name__)
DOMAIN = "custom_icons"


@config_entries.HANDLERS.register(DOMAIN)
class CustomIconsConfigFlow(config_entries.ConfigFlow):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        errors = {}

        if user_input is not None:
            # Check if entry already exists
            await self.async_set_unique_id(DOMAIN)
            self._abort_if_unique_id_configured()

            return self.async_create_entry(
                title=user_input["icons_path"],
                data={"icons_path": user_input["icons_path"]},
            )

        data_schema = vol.Schema(
            {
                vol.Required(
                    "icons_path", default="www/custom_icons"
                ): str,
            }
        )

        return self.async_show_form(
            step_id="user",
            data_schema=data_schema,
            errors=errors,
            description_placeholders={
                "example": "www/custom_icons or config/custom_icons"
            },
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return CustomIconsOptionsFlow(config_entry)


class CustomIconsOptionsFlow(config_entries.OptionsFlow):
    def __init__(self, config_entry):
        self.config_entry = config_entry

    async def async_step_init(self, user_input=None):
        if user_input is not None:
            return self.async_abort_entry_configured()

        data_schema = vol.Schema(
            {
                vol.Required(
                    "icons_path", default=self.config_entry.data["icons_path"]
                ): str,
            }
        )

        return self.async_show_form(
            step_id="init",
            data_schema=data_schema,
            description_placeholders={
                "example": "www/custom_icons or config/custom_icons"
            },
        )
