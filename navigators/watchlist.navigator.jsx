import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WatchlistScreen } from '../screens/watchlist.screen';

const Stack = createNativeStackNavigator();

export const WatchlistNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Watchlist">
      <Stack.Screen name="Watchlist" component={WatchlistScreen} />
    </Stack.Navigator>
  );
};
