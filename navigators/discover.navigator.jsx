import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverScreen } from '../screens/discover.screen';
import { MovieDetailScreen } from '../screens/movie-detail.screen';
import { SCREENS } from './constants';

const Stack = createNativeStackNavigator();

export const DiscoverNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.DISCOVER}
      screenOptions={{ title: 'Discover New Movies' }}
    >
      <Stack.Screen name={SCREENS.DISCOVER} component={DiscoverScreen} />
      <Stack.Screen
        name={SCREENS.MOVIE_DETAIL}
        component={MovieDetailScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};
