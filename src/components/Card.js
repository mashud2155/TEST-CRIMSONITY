import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

const Card = ({title, children, style}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const cardStyle = {
    backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
  };

  const titleStyle = {
    color: isDarkMode ? '#ffffff' : '#333333',
  };

  return (
    <View style={[styles.card, cardStyle, style]}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  content: {
    width: '100%',
  },
});

export default Card;
