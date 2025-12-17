import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    flex: 1,
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Text style={[styles.title, textStyle]}>
            Welcome to Crimsonity Mobile
          </Text>
          <Text style={[styles.subtitle, textStyle]}>
            A React Native Mobile Application
          </Text>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, textStyle]}>
              Getting Started
            </Text>
            <Text style={[styles.sectionDescription, textStyle]}>
              This is a basic mobile app structure built with React Native.
              You can now start developing your mobile application features.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, textStyle]}>
              Next Steps
            </Text>
            <Text style={[styles.sectionDescription, textStyle]}>
              • Add your app screens and navigation{'\n'}
              • Implement your business logic{'\n'}
              • Style your components{'\n'}
              • Connect to backend APIs{'\n'}
              • Test on both iOS and Android
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.7,
  },
  section: {
    marginVertical: 16,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
});

export default App;
