import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DiscoverNavigator } from './navigators/discover.navigator';
import { WatchlistNavigator } from './navigators/watchlist.navigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { QueryClient, QueryClientProvider } from 'react-query';

const Tab = createMaterialBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Discover"
            screenOptions={{ headerShown: false }}
            inactiveColor="black"
          >
            <Tab.Screen
              name="Discover"
              component={DiscoverNavigator}
              options={{ tabBarIcon: 'movie-search' }}
            />
            <Tab.Screen
              name="Watchlist"
              component={WatchlistNavigator}
              options={{ tabBarIcon: 'star-plus' }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
