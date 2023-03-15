import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DiscoverNavigator } from './navigators/discover.navigator';
import { WatchlistNavigator } from './navigators/watchlist.navigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { QueryClient, QueryClientProvider } from 'react-query';
import getContentfulEntries from './contentful-client';

const Tab = createMaterialBottomTabNavigator();
const queryClient = new QueryClient();

// TODO:: make this nice and parse it
getContentfulEntries().then((data) => {
  console.log('DONE');
  console.log(JSON.stringify(data));
});
/*

TODO::
1) Make favicon?
2) Usememo, useCallback
3) Prettyify: single quites
4) Prettify: space between brackets
5) SHOW HOW NOT TO STORE CONTENTFUL ACCESS KEY HARDCODED
6) Sort out file structure locations
7) Set up a universal theme?
8) Loading screen for watchlist-screen
*/
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
              options={{ tabBarIcon: 'popcorn' }}
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
