import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WatchlistScreen } from '../screens/watchlist.screen';
import { SCREENS } from './constants';

const Stack = createNativeStackNavigator();

export const WatchlistNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.WATCHLIST}
      screenOptions={{ headerTitle: 'Watch your Favorites!' }}
    >
      <Stack.Screen name={SCREENS.WATCHLIST} component={WatchlistScreen} />
    </Stack.Navigator>
  );
};
