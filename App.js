import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DiscoverNavigator } from './navigators/discover.navigator';
import { WatchlistNavigator } from './navigators/watchlist.navigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NAVIGATORS } from './navigators/constants';
import { MD2Colors } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const queryClient = new QueryClient();

/*
TODO::
1) Make favicon?
5) SHOW HOW NOT TO STORE CONTENTFUL ACCESS KEY HARDCODED
*/
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={NAVIGATORS.DISCOVER}
            screenOptions={{ headerShown: false }}
            inactiveColor={MD2Colors.grey700}
            activeColor={MD2Colors.black}
          >
            <Tab.Screen
              name={NAVIGATORS.DISCOVER}
              component={DiscoverNavigator}
              options={{ tabBarIcon: 'movie-search', tabBarLabel: 'Discover' }}
            />
            <Tab.Screen
              name={NAVIGATORS.WATCHLIST}
              component={WatchlistNavigator}
              options={{ tabBarIcon: 'popcorn', tabBarLabel: 'Watchlist' }}
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
