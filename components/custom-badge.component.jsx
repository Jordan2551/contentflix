import React from 'react';
import Star from '../assets/star.png';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export const CustomBadge = (props) => {
  const { text, style = {} } = props;

  return (
    <View style={{ ...styles.badgeContainer, ...style }}>
      <Image source={Star} style={styles.badgeStar} />
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'row',
    borderRadius: 20,
    padding: 6,
  },
  badgeStar: {
    width: 17,
    height: 17,
  },
  badgeText: {
    color: 'white',
    marginLeft: 3,
  },
});
