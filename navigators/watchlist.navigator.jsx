import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WatchlistScreen } from '../screens/watchlist.screen';
import { ROUTES } from './constants';

const Stack = createNativeStackNavigator();

export const WatchlistNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.WATCHLIST}
      screenOptions={{ headerTitle: 'Watch your Favorites!' }}
    >
      <Stack.Screen name={ROUTES.WATCHLIST} component={WatchlistScreen} />
    </Stack.Navigator>
  );
};
