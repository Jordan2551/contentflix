import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverScreen } from '../screens/discover.screen';
import { MovieDetailScreen } from '../screens/movie-detail.screen';
import { ROUTES } from './constants';

const Stack = createNativeStackNavigator();

export const DiscoverNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.DISCOVER}>
      <Stack.Screen name={ROUTES.DISCOVER} component={DiscoverScreen} />
      <Stack.Screen
        name={ROUTES.MOVIE_DETAIL}
        component={MovieDetailScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};
