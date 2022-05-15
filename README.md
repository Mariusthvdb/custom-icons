# Custom icon library

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GH-release](https://img.shields.io/github/v/release/Mariusthvdb/custom-icons.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/releases)
[![GH-downloads](https://img.shields.io/github/downloads/Mariusthvdb/custom-icons/total?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/Mariusthvdb/custom-icons.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/Mariusthvdb/custom-icons.svg?color=red&style=flat-square)](https://github.com/Mariusthvdb/custom-icons)

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
          return (state === 'on') ? 'cil:desklamp-on' : 'mdi:desk-lamp';
```

<img width="492" alt="custom-icons" src="https://user-images.githubusercontent.com/33354141/168223920-f2685d34-5463-4868-ba1c-65628f5049e6.png">

## Icons

### Custom made and legacy

custom-icons includes legacy Mdi icons, and several special purpose icons made on request
(more to be listed below, for the full set, check the .js file please)

[//]: # (Start Custom Icons)

| Icon | Name | Author |
| :--- | :--- | :--- 
| ![cil:apple-homepod](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/apple-homepod.svg)| apple-homepod | arallsopp |
| ![cil:apple-homepod-mini](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/apple-homepod-mini.svg)| apple-homepod-mini | arallsopp |
| ![cil:cellphone-iphone](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/cellphone-iphone.svg)| cellphone-iphone | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:corona-virus](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/corona-virus.svg)| corona-virus | Matt8707 |
| ![cil:delete-alert](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/delete-alert.svg)| delete-alert | idevo89 |
| ![cil:delete-alert-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/delete-alert-outline.svg)| delete-alert-outline | idevo89 |
| ![cil:desklamp-on](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/desklamp-on.svg)| desklamp-on | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:dishwasher-silverware](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/dishwasher-silverware.svg)| dishwasher-silverware | MrGrigri |
| ![cil:docker-watchtower](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/docker-watchtower.svg)| docker-watchtower | Matt8707 |
| ![cil:earth-alert](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/earth-alert.svg)| earth-alert | MrGrigri |
| ![cil:earth-vibrate](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/earth-vibrate.svg)| earth-vibrate | MrGrigri |
| ![cil:eq-calibrate](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/eq-calibrate.svg)| eq-calibrate | Matt8707 |
| ![cil:hdmi-source](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/hdmi-source.svg)| hdmi-source | Matt8707 |
| ![cil:home-broken](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-broken.svg)| home-broken | MrGrigri |
| ![cil:home-broken-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-broken-outline.svg)| home-broken-outline | MrGrigri |
| ![cil:home-climate](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-climate.svg)| home-climate | tgrelka |
| ![cil:home-climate-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-climate-outline.svg)| home-climate-outline | boehan |
| ![cil:home-export-no-roof-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-export-no-roof-outline.svg)| home-export-no-roof-outline | goyney |
| ![cil:home-import-no-roof-outline](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-import-no-roof-outline.svg)| home-import-no-roof-outline | goyney |
| ![cil:home-pulse](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/home-pulse.svg)| home-pulse | MrGrigri |
| ![cil:hue](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/hue.svg)| hue | Matt8707 |
| ![cil:ikea-death-star](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/ikea-death-star.svg)| ikea-death-star | arallsopp |
| ![cil:imac-alternative](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/imac-alternative.svg)| imac-alternative | Matt8707 |
| ![cil:imac-ssd](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/imac-ssd.svg)| imac-ssd | Matt8707 |
| ![cil:iphone-modern](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/iphone-modern.svg)| iphone-modern | Matt8707 |
| ![cil:laptop-mac](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/laptop-mac.svg)| laptop-mac | [Mdi](https://dev.materialdesignicons.com/changelog) |
| ![cil:light-switch](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/light-switch.svg)| light-switch | arallsopp |
| ![cil:lock](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/lock.svg)| lock | Matt8707 |
| ![cil:pedestal-fan](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/pedestal-fan.svg)| pedestal-fan | Matt8707 |
| ![cil:roborock-filter](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-filter.svg)| roborock-filter | Matt8707 |
| ![cil:roborock-mainbrush](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-mainbrush.svg)| roborock-mainbrush | Matt8707 |
| ![cil:roborock-sensor](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-sensor.svg)| roborock-sensor | Matt8707 |
| ![cil:roborock-sidebrush](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-sidebrush.svg)| roborock-sidebrush | Matt8707 |
| ![cil:roborock-vacuum](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-vacuum.svg)| roborock-vacuum | Matt8707 |
| ![cil:roborock-vacuum-map](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/roborock-vacuum-map.svg)| roborock-vacuum-map | Matt8707 |
| ![cil:shutter-0](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-0.svg)| shutter-0 | g-kiss |
| ![cil:shutter-1](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-1.svg)| shutter-1 | g-kiss |
| ![cil:shutter-2](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-2.svg)| shutter-2 | g-kiss |
| ![cil:shutter-3](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-3.svg)| shutter-3 | g-kiss |
| ![cil:shutter-4](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-4.svg)| shutter-4 | g-kiss |
| ![cil:studio-monitor](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/studio-monitor.svg)| studio-monitor | Matt8707 |
| ![cil:sun-angle](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/sun-angle.svg)| sun-angle | goyney |
| ![cil:sun-angle-variant](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/sun-angle-variant.svg)| sun-angle-variant | goyney |
| ![cil:synology-nas](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/synology-nas.svg)| synology-nas | Matt8707 |
| ![cil:table-cylinder-lamp](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/table-cylinder-lamp.svg)| table-cylinder-lamp | GunterAV |
| ![cil:thermometer-empty](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/thermometer-empty.svg)| thermometer-empty | goyney |
| ![cil:thermometer-full](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/thermometer-full.svg)| thermometer-full | goyney |
| ![cil:tv](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/tv.svg)| tv | Matt8707 |
| ![cil:uplighter](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/uplighter.svg)| uplighter | GunterAV |
| ![cil:uplighter-2-way](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/uplighter-2-way.svg)| uplighter-2-way | GunterAV |



[//]: # (End Custom Icons)

## Want to join and add an icon?

Please feel free to add an icon request, and open a discussion for that, preferably with the .svg in attachment. Of course, you can also open a Pr.
