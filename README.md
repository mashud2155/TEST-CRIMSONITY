# Crimsonity Mobile App

A React Native mobile application for cross-platform development (iOS and Android).

## Overview

This is a mobile app project built with React Native, providing a foundation for developing cross-platform mobile applications.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **React Native CLI**
- **Xcode** (for iOS development on macOS)
- **Android Studio** (for Android development)
- **CocoaPods** (for iOS dependencies on macOS)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

or with yarn:

```bash
yarn install
```

### 2. iOS Setup (macOS only)

Install iOS dependencies:

```bash
cd ios && pod install && cd ..
```

### 3. Running the App

#### Android

```bash
npm run android
```

or

```bash
yarn android
```

Make sure you have an Android emulator running or a physical device connected.

#### iOS (macOS only)

```bash
npm run ios
```

or

```bash
yarn ios
```

#### Start Metro Bundler (if not started automatically)

```bash
npm start
```

or

```bash
yarn start
```

## Project Structure

```
crimsonity-mobile/
├── __tests__/          # Test files
├── android/            # Android native code (generated on first run)
├── ios/                # iOS native code (generated on first run)
├── App.js              # Main app component
├── index.js            # App entry point
├── app.json            # App configuration
├── package.json        # Dependencies and scripts
├── babel.config.js     # Babel configuration
├── metro.config.js     # Metro bundler configuration
└── README.md           # This file
```

## Available Scripts

- `npm start` - Start the Metro bundler
- `npm run android` - Run the app on Android
- `npm run ios` - Run the app on iOS
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Testing

Run tests with:

```bash
npm test
```

or

```bash
yarn test
```

## Development

### Adding New Features

1. Create new components in a `src/components/` directory
2. Add screens in `src/screens/`
3. Implement navigation using React Navigation
4. Style components using StyleSheet or styled-components

### Code Style

The project uses ESLint and Prettier for code formatting. Run linting with:

```bash
npm run lint
```

## Building for Production

### Android

```bash
cd android
./gradlew assembleRelease
```

### iOS

Use Xcode to create a production build:
1. Open `ios/CrimsonityMobile.xcworkspace` in Xcode
2. Select your development team
3. Archive the app
4. Submit to App Store

## Troubleshooting

### Metro Bundler Issues

If you encounter caching issues:

```bash
npm start -- --reset-cache
```

### Android Build Issues

Clean the build:

```bash
cd android
./gradlew clean
cd ..
```

### iOS Build Issues

Clean the build:

```bash
cd ios
xcodebuild clean
pod install
cd ..
```

## Learn More

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [React Native Community](https://github.com/react-native-community)

## License

This project is licensed under the MIT License.
