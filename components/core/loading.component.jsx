import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={MD2Colors.redA400} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
