import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, MD2Colors } from 'react-native-paper';

export const CustomButton = (props) => {
  const { text, onPress } = props;

  return (
    <Button style={styles.container} textColor={'white'} onPress={onPress}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    color: 'white',
    backgroundColor: MD2Colors.red600,
  },
});
