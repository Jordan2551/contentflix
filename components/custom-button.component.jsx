import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

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
    // We set backgroundColor and not Opacity because opacity sets the opacity for all child views while backgroundColor only sets opacity of the container
    // TODO:: SET A UNIVERSAL COLOR FILE
    backgroundColor: 'rgba(208, 54, 28, 0.8)',
  },
});
