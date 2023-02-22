import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverScreen } from '../screens/discover.screen';
import { MovieDetailScreen } from '../screens/movie-detail.screen';

const Stack = createNativeStackNavigator();

export const DiscoverNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Discover">
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};
