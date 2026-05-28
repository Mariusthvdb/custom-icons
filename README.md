# Custom Icons for Home Assistant

A minimal Home Assistant integration for serving custom SVG icons from a folder of your choice.

## Features

- 📁 **Configurable folder** - Set any folder path via config flow
- 🎨 **Simple SVG serving** - Drop SVG files and use them immediately
- 🔒 **Security checks** - Blocks malicious SVGs with event handlers or scripts
- 📦 **Nested folders** - Organize icons in subfolders
- ⚡ **Lightweight** - Minimal overhead, fast icon loading

## Installation

1. Copy the `custom_components/custom_icons` folder to your Home Assistant `custom_components` directory
2. Restart Home Assistant
3. Go to **Settings** → **Devices & Services** → **Create Integration**
4. Search for "Custom Icons" and set your icon folder path

## Usage

### Set Icon Folder

During setup, configure the path where your SVG icons are stored. Examples:
- `www/custom_icons` (relative to Home Assistant config directory)
- `config/custom_icons`
- `/mnt/shared_storage/icons`

The folder will be created automatically if it doesn't exist.

### Add Icons

1. Create SVG files in your configured folder
2. Icons in subfolders are supported: `subfolder/icon-name.svg`

### Reference Icons

Use the `cil` prefix in any icon field:

```yaml
icon: cil:my-icon-name
icon: cil:subfolder/my-icon-name
```

## SVG Requirements

- **Valid SVG format** - Must be parseable XML
- **ViewBox attribute** - Recommended for proper scaling (e.g., `viewBox="0 0 24 24"`)
- **No event handlers** - SVGs with `onclick`, `onload`, etc. will be blocked
- **No scripts** - SVGs containing `<script>` tags will be blocked

## Security

The integration validates all SVG files to prevent XSS attacks:
- ✅ Blocks SVGs with event handlers
- ✅ Blocks SVGs with script tags
- ✅ Validates XML structure
- ✅ Warns about missing viewBox attributes

## Troubleshooting

### Icons not loading?

Check your Home Assistant logs for messages like:
- `Custom Icons loaded from www/custom_icons` - Integration started successfully
- `Failed to load icon: icon-name` - Icon file not found
- `SVG contains event handlers, blocked: icon-name` - SVG rejected for security

### Icon looks wrong?

Make sure your SVG has a `viewBox` attribute. Home Assistant needs this for proper scaling:

```xml
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <!-- your icon content -->
</svg>
```

## License

See LICENSE file
