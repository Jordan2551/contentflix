import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD2Colors, Text } from 'react-native-paper';

export const Error = (props) => {
  const { error } = props;

  return (
    <View style={styles.container}>
      <Text variant="bodyLarge" style={styles.errorText}>
        😱 Oh no! An error has occurred
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MD2Colors.redA200,
    paddingHorizontal: 10,
  },
  errorText: {
    color: MD2Colors.white,
  },
});
