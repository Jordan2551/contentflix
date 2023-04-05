import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DiscoverNavigator } from './navigators/discover.navigator';
import { WatchlistNavigator } from './navigators/watchlist.navigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ROUTES } from './navigators/constants';

const Tab = createMaterialBottomTabNavigator();
const queryClient = new QueryClient();

/*
TODO::
1) Make favicon?
2) Usememo, useCallback
3) Prettyify: single quotes
4) Prettify: space between brackets
5) SHOW HOW NOT TO STORE CONTENTFUL ACCESS KEY HARDCODED
6) Sort out file structure locations
7) Set up a universal theme?
8) Loading screen for watchlist-screen
9) Fix  WARN  Found screens with the same name nested inside one another. Check:
DISCOVER, DISCOVER > DISCOVER,
WATCHLIST, WATCHLIST > WATCHLIST
*/
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={ROUTES.DISCOVER}
            screenOptions={{ headerShown: false }}
            inactiveColor="black"
          >
            <Tab.Screen
              name={ROUTES.DISCOVER}
              component={DiscoverNavigator}
              options={{ tabBarIcon: 'movie-search' }}
            />
            <Tab.Screen
              name={ROUTES.WATCHLIST}
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
