import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { MovieDetailScreen } from './screens/movie-detail.screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DiscoverNavigator } from './navigators/discover.navigator';
import { WatchlistNavigator } from './navigators/watchlist.navigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
