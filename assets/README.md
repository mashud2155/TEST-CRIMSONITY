# Assets Directory

This directory is for storing static assets for the mobile app:

- **Images**: App icons, splash screens, logos, and other image assets
- **Fonts**: Custom font files
- **Data**: JSON or other data files

## Structure

```
assets/
├── images/
│   ├── icon.png
│   ├── splash.png
│   └── ...
├── fonts/
│   └── ...
└── data/
    └── ...
```

## Image Requirements

### App Icon
- **iOS**: 1024x1024px
- **Android**: 512x512px

### Splash Screen
- Recommended: 1242x2436px (scales well for all devices)

## Usage

In React Native, you can import assets like this:

```javascript
import {Image} from 'react-native';

<Image source={require('../assets/images/icon.png')} />
```
