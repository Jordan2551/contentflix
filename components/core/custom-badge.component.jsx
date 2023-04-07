import React from 'react';
import Star from '../../assets/star.png';
import { Image, StyleSheet, View } from 'react-native';
import { MD2Colors, Text } from 'react-native-paper';

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
    backgroundColor: MD2Colors.black,
    flexDirection: 'row',
    borderRadius: 20,
    padding: 6,
  },
  badgeStar: {
    width: 17,
    height: 17,
  },
  badgeText: {
    color: MD2Colors.white,
    marginLeft: 3,
  },
});
