# Custom icon library

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GH-release](https://img.shields.io/github/v/release/Mariusthvdb/custom-icons.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/releases)
[![GH-downloads](https://img.shields.io/github/downloads/Mariusthvdb/custom-icons/total?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/Mariusthvdb/custom-icons.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/Mariusthvdb/custom-icons.svg?color=red&style=flat-square)](https://github.com/Mariusthvdb/custom-icons)

Several custom made and legacy icons, and icons collected all over the internet in 1 set, UI selectable.

Upon each [Material Design icons](http://materialdesignicons.com) update to HA, icons tend to be deprecated, and every now and then I'd love to keep using some. Branded icons, or legacy models. 
Several icons by the Frontend magician [Matt8707](https://github.com/matt8707/hass-config) are listed, and I've also found use for the finer grained Shutter icons by [g-kiss](https://github.com/g-kiss/Home-Assistant-custom-shutter-icons), but needed them in another format.

Structure of the file copied from the great and appreciated [Hass Hue Icon](https://github.com/arallsopp/hass-hue-icons) repo by @arallsopp who should recieve all the credits and without whom the HA interface would not be the same ;-)

Thanks to all!

# Installation
Working on Hacs. For manual installation, add:

```yaml
- url: /local/lovelace/resources/custom-icons/custom-icons.js?v=0.1.4
  type: module
```

to your resources file or in Dashboard UI.

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

![Custom icons](https://github.com/Mariusthvdb/Custom-icons/blob/main/custom-icons.png)

## Icons

### Custom made and legacy

custom-icons includes legacy Mdi icons, and several special purpose icons made on request
(more to be listed below, for the full set, check the .js file please)

[//]: # (Start Custom Icons)

| Icon | Name | Author | Icon | Name | Author |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ![cil:apple-homepod-mini](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/apple-homepod-mini.svg)| apple-homepod-mini | [@arallsopp](https://github.com/arallsopp) | ![cil:apple-homepod](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/apple-homepod.svg)| apple-homepod | [@arallsopp](https://github.com/arallsopp) | 
| ![cil:cellphone-iphone](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/cellphone-iphone.svg)| cellphone-iphone | [Mdi legacy](https://dev.materialdesignicons.com/changelog) | ![cil:desklamp-on](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/desklamp-on.svg)| desklamp-on | [Mdi legacy](https://dev.materialdesignicons.com/changelog) | 
| ![cil:laptop-mac](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/laptop-mac.svg)| laptop-mac | [Mdi legacy](https://dev.materialdesignicons.com/changelog) | ![cil:light-switch](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/light-switch.svg)| light-switch | [Mdi legacy](https://dev.materialdesignicons.com/changelog) |
| ![cil:shutter-0](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-0.svg)| shutter-0 | [@g-kiss](https://github.com/g-kiss) | ![cil:shutter-1](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-1.svg)| shutter-1 | [@g-kiss](https://github.com/g-kiss) |
| ![cil:shutter-2](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-2.svg)| shutter-2 | [@g-kiss](https://github.com/g-kiss) | ![cil:shutter-3](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-3.svg)| shutter-3 | [@g-kiss](https://github.com/g-kiss) |
| ![custom:shutter-4](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-4.svg)| shutter-4 | [@g-kiss](https://github.com/g-kiss) | ![cil:ikea-death-star](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/ikea-death-star.svg)| ikea-death-star | [@arallsopp](https://github.com/arallsopp) |

[//]: # (End Custom Icons)

## Want to join and add an icon?

Please feel free to add an icon request, and open a discussion for that, preferably with the .svg in attachment. Of course, you can also open a Pr.
