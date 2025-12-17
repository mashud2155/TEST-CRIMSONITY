import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Button, Card} from '../components';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
    flex: 1,
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const cardTextStyle = {
    color: isDarkMode ? '#cccccc' : '#555555',
  };

  const handleGetStarted = () => {
    console.log('Get Started button pressed');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Text style={[styles.title, textStyle]}>Crimsonity Mobile</Text>
          <Text style={[styles.subtitle, textStyle]}>
            Your Mobile App Journey Starts Here
          </Text>

          <Card title="Welcome" style={styles.card}>
            <Text style={[styles.cardText, cardTextStyle]}>
              This is a starter template for your React Native mobile
              application. Start building amazing mobile experiences!
            </Text>
          </Card>

          <Card title="Features" style={styles.card}>
            <Text style={[styles.cardText, cardTextStyle]}>
              • Cross-platform support (iOS & Android){'\n'}
              • Modern React Native architecture{'\n'}
              • Reusable components{'\n'}
              • Easy to customize and extend{'\n'}
              • Dark mode support
            </Text>
          </Card>

          <View style={styles.buttonContainer}>
            <Button title="Get Started" onPress={handleGetStarted} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    opacity: 0.7,
  },
  card: {
    marginVertical: 10,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 22,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
});

export default HomeScreen;
