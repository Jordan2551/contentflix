import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverScreen } from './screens/discover.screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MovieDetail, MovieDetailScreen } from './screens/movie-detail.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Discover">
          <Stack.Screen name="Discover" component={DiscoverScreen} />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetailScreen}
            options={{ title: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
