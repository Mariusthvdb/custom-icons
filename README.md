# Custom icon library

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)
[![GH-release](https://img.shields.io/github/v/release/Mariusthvdb/custom-icons.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/releases)
[![GH-downloads](https://img.shields.io/github/downloads/Mariusthvdb/custom-icons/total?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/Mariusthvdb/custom-icons.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/Mariusthvdb/custom-icons.svg?color=red&style=flat-square)](https://github.com/Mariusthvdb/custom-icons)


![icon](https://github.com/user-attachments/assets/45507839-3aef-4682-9957-f27501ba883e)




# Read this first: preferred usage and component

This repo started out with the JS script. That script requires the maintainers to edit each and every icon into it, hard coded. It is not very user friendly, and PR's are made difficult too.

We have adapted the [Font awesome](https://github.com/thomasloven/hass-fontawesome) custom component by Thomas Loven, which has a much better user experience. With the Custom component, using customized icons is a matter of saving them in the dedicated `/config/www/custom_icons` folder and you're set. The icon picker in Home Assistant can list the icons using the `cli:` prefix instead of the core `mdi:` prefix.

<img width="554" alt="cli icon picker" src="https://github.com/user-attachments/assets/3babf352-7b97-4760-98d9-8745cdce10d4">

So, our preferred method for using non `mdi:` icons is now via the custom_component you can find in this repo. New icons do not require PRs to the integration, just find or create your preferred .svg icons and use them as described above.

Because of that, PR's to the JS resource plugin here will no longer be merged.

(note the JS resource plugin used `cil:`)
_____

Several custom made and legacy icons, and icons collected all over the internet in 1 set, UI selectable.

Upon each [Material Design icons](http://materialdesignicons.com) update to HA, icons tend to be deprecated, and every now and then I'd love to keep using some. Branded icons, or legacy models. In many Pr's to the main MDI library, icon designs get rejected, while still very useable. Some of these are added in this library.
Several icons by the Frontend magician [Matt8707](https://github.com/matt8707/hass-config) are listed, and I've also found use for the finer grained Shutter icons by [g-kiss](https://github.com/g-kiss/Home-Assistant-custom-shutter-icons), but needed them in another format.

Structure of the file copied from the great and appreciated [Hass Hue Icon](https://github.com/arallsopp/hass-hue-icons) repo by [@arallsopp](https://github.com/arallsopp) who should recieve all the credits and without whom the HA interface would not be the same ;-)

Thanks to all!

# Installation
On Hacs, install as custom repository. For manual installation, add:

```yaml
- url: /local/lovelace/resources/custom-icons/custom-icons.js?v=0.1.4
  type: module
```

to your resources file (adapt path to your own folder structure), or click

<a href="https://my.home-assistant.io/redirect/lovelace_resources/" target="_blank"><img src="https://my.home-assistant.io/badges/lovelace_resources.svg" alt="Open your Home Assistant instance and show your Lovelace resources." /></a>

## Usage
- In your entity editor, specify an icon as `cil:icon-name`, to indicate the icon to be from this Custom Icon Libary.
- If you set `state_color: true` in your card, you'll see the icons get colorised based upon the current theme settings.

### Example:

```
    - type: entities
      title: Custom icons
      state_color: true
      show_header_toggle: false
      entities:
        - entity: switch.tester
          name: Switch Light
          icon: cil:light-switch
        - entity: device_tracker.mijn_mobiel
          name: My Phone
          icon: cil:cellphone-iphone
        - entity: light.alarm
          name: Ceiling light
          icon: cil:ikea-death-star
        - type: section
          label: Set icon via Custom-ui/customize
        - light.bureau_left
        - light.bureau_right
```

Of course, you can also get crafty, using [Custom-ui](https://github.com/Mariusthvdb/custom-ui), and set your icons in a template:

```
homeassistant:
  customize:
    light.bureau_left:
      templates:
        icon: >
          return state === 'on' ? 'cil:desklamp-on' : 'mdi:desk-lamp';
```

<img width="492" alt="custom-icons" src="https://user-images.githubusercontent.com/33354141/168223920-f2685d34-5463-4868-ba1c-65628f5049e6.png">

## Icons

### Custom made and legacy

custom-icons includes legacy Mdi icons, and several special purpose icons made on request.

## Icon finder

Andy created an [Icon Library Cheat Sheet](https://arallsopp.github.io/hass-hue-icons/docs/build/tester/iconfinder.html?library=https://mariusthvdb.github.io/custom-icons/custom-icons.js&map=CUSTOM_ICONS_MAP) so you can quickly see and search which icons are available. Thanks!

Listed with icon author:

[//]: # (Start Custom Icons)

| Icon | Name | Author |
| :--- | :--- | :--- 
| ![cil:android-messages](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/android-messages.svg)| android-messages | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:apple-homepod](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/apple-homepod.svg)| apple-homepod | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:apple-homepod-mini](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/apple-homepod-mini.svg)| apple-homepod-mini | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:cellphone-iphone](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/cellphone-iphone.svg)| cellphone-iphone | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:cooker-hood](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/cooker-hood.svg)| cooker-hood | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:cooker-hood-curve](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/cooker-hood-curve.svg)| cooker-hood-curve | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:cooker-hood-trapezoid](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/cooker-hood-trapezoid.svg)| cooker-hood-trapezoid | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:delete-alert](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/delete-alert.svg)| delete-alert | [idevo89](https://github.com/idevo89) |
| ![cil:delete-alert-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/delete-alert-outline.svg)| delete-alert-outline | [idevo89](https://github.com/idevo89) |
| ![cil:desklamp-on](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/desklamp-on.svg)| desklamp-on | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:desktop-mac](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/desktop-mac.svg)| desktop-mac | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:desktop-mac-dashboard](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/desktop-mac-dashboard.svg)| desktop-mac-dashboard | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:dishwasher-silverware](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/dishwasher-silverware.svg)| dishwasher-silverware | [MrGrigri](https://github.com/MrGrigri) |
| ![cil:docker-watchtower](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/docker-watchtower.svg)| docker-watchtower | [Matt8707](https://github.com/Matt8707) |
| ![cil:earth-alert](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/earth-alert.svg)| earth-alert | [MrGrigri](https://github.com/MrGrigri) |
| ![cil:earth-vibrate](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/earth-vibrate.svg)| earth-vibrate | [MrGrigri](https://github.com/MrGrigri) |
| ![cil:eq-calibrate](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/eq-calibrate.svg)| eq-calibrate | [Matt8707](https://github.com/Matt8707) |
| ![cil:google-home](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/google-home.svg)| google-home | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:google-home-alt](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/google-home-alt.svg)| google-home-alt | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:google-home-alt-off](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/google-home-alt-off.svg)| google-home-alt-off | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:google-home-off](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/google-home-off.svg)| google-home-off | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:hdmi-source](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/hdmi-source.svg)| hdmi-source | [Matt8707](https://github.com/Matt8707) |
| ![cil:home-broken](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-broken.svg)| home-broken | [MrGrigri](https://github.com/MrGrigri) |
| ![cil:home-broken-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-broken-outline.svg)| home-broken-outline | [MrGrigri](https://github.com/MrGrigri) |
| ![cil:home-climate](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-climate.svg)| home-climate | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:home-climate-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-climate-outline.svg)| home-climate-outline | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:home-export-no-roof-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-export-no-roof-outline.svg)| home-export-no-roof-outline | [goyney](https://github.com/goyney) |
| ![cil:home-import-no-roof-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-import-no-roof-outline.svg)| home-import-no-roof-outline | [goyney](https://github.com/goyney) |
| ![cil:home-pulse](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-pulse.svg)| home-pulse | [MrGrigri](https://github.com/MrGrigri) |
| ![cil:hue](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/hue.svg)| hue | [Matt8707](https://github.com/Matt8707) |
| ![cil:ikea-death-star](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/ikea-death-star.svg)| ikea-death-star | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:imac-alternative](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/imac-alternative.svg)| imac-alternative | [Matt8707](https://github.com/Matt8707) |
| ![cil:imac-ssd](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/imac-ssd.svg)| imac-ssd | [Matt8707](https://github.com/Matt8707) |
| ![cil:iphone-modern](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/iphone-modern.svg)| iphone-modern | [Matt8707](https://github.com/Matt8707) |
| ![cil:laptop-chromebook](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/laptop-chromebook.svg)| laptop-chromebook | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:laptop-mac](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/laptop-mac.svg)| laptop-mac | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:laptop-windows](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/laptop-windows.svg)| laptop-windows | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:light-switch](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/light-switch.svg)| light-switch | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:lock](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/lock.svg)| lock | [Matt8707](https://github.com/Matt8707) |
| ![cil:lutron-pico](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/lutron-pico.svg)| lutron-pico | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:lutron-pico-b1](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/lutron-pico-b1.svg)| lutron-pico-b1 | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:lutron-pico-b2](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/lutron-pico-b2.svg)| lutron-pico-b2 | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:lutron-pico-b3](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/lutron-pico-b3.svg)| lutron-pico-b3 | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:lutron-pico-b4](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/lutron-pico-b4.svg)| lutron-pico-b4 | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:lutron-pico-b5](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/lutron-pico-b5.svg)| lutron-pico-b5 | [arallsopp](https://github.com/arallsopp/hass-hue-icons) |
| ![cil:pedestal-fan](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/pedestal-fan.svg)| pedestal-fan | [Matt8707](https://github.com/Matt8707) |
| ![cil:roborock-filter](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-filter.svg)| roborock-filter | [Matt8707](https://github.com/Matt8707) |
| ![cil:roborock-mainbrush](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-mainbrush.svg)| roborock-mainbrush | [Matt8707](https://github.com/Matt8707) |
| ![cil:roborock-sensor](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-sensor.svg)| roborock-sensor | [Matt8707](https://github.com/Matt8707) |
| ![cil:roborock-sidebrush](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-sidebrush.svg)| roborock-sidebrush | [Matt8707](https://github.com/Matt8707) |
| ![cil:roborock-vacuum](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-vacuum.svg)| roborock-vacuum | [Matt8707](https://github.com/Matt8707) |
| ![cil:roborock-vacuum-map](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-vacuum-map.svg)| roborock-vacuum-map | [Matt8707](https://github.com/Matt8707) |
| ![cil:shutter-0](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-0.svg)| shutter-0 | [g-kiss](https://github.com/g-kiss) |
| ![cil:shutter-1](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-1.svg)| shutter-1 | [g-kiss](https://github.com/g-kiss) |
| ![cil:shutter-2](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-2.svg)| shutter-2 | [g-kiss](https://github.com/g-kiss) |
| ![cil:shutter-3](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-3.svg)| shutter-3 | [g-kiss](https://github.com/g-kiss) |
| ![cil:shutter-4](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-4.svg)| shutter-4 | [g-kiss](https://github.com/g-kiss) |
| ![cil:studio-monitor](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/studio-monitor.svg)| studio-monitor | [Matt8707](https://github.com/Matt8707) |
| ![cil:sun-angle](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/sun-angle.svg)| sun-angle | [goyney](https://github.com/goyney) |
| ![cil:sun-angle-variant](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/sun-angle-variant.svg)| sun-angle-variant | [goyney](https://github.com/goyney) |
| ![cil:synology-nas](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/synology-nas.svg)| synology-nas | [Matt8707](https://github.com/Matt8707) |
| ![cil:table-cylinder-lamp](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/table-cylinder-lamp.svg)| table-cylinder-lamp | [GunterAV](https://github.com/GunterAV) |
| ![cil:tablet-android](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/tablet-android.svg)| tablet-android | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:tablet-ipad-legacy](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/tablet-ipad-legacy.svg)| tablet-ipad-legacy | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:thermometer-empty](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/thermometer-empty.svg)| thermometer-empty | [goyney](https://github.com/goyney) |
| ![cil:thermometer-full](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/thermometer-full.svg)| thermometer-full | [goyney](https://github.com/goyney) |
| ![cil:tv](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/tv.svg)| tv | [Matt8707](https://github.com/Matt8707) |
| ![cil:uplighter](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/uplighter.svg)| uplighter | [GunterAV](https://github.com/GunterAV) |
| ![cil:uplighter-2-way](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/uplighter-2-way.svg)| uplighter-2-way | [GunterAV](https://github.com/GunterAV) |


[//]: # (End Custom Icons)


## Icon authors

[Mdi](https://dev.materialdesignicons.com/changelog)
[arallsopp](https://github.com/arallsopp)
[MrGrigri](https://github.com/MrGrigri)
[idevo89](https://github.com/idevo89)
[goyney](https://github.com/goyney)
[g-kiss](https://github.com/g-kiss)
[GunterAV](https://github.com/GunterAV)
[Matt8707](https://github.com/Matt8707)
[tgrelka](https://github.com/tgrelka)
[boehan](https://github.com/boehan)

## Want to join and add an icon?

Please feel free to add an icon request, and open a discussion for that, preferably with the .svg in attachment. Of course, you can also open a Pr.
