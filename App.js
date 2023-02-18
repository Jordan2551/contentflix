import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MOVIES } from './constants/movies';
import { MovieCardCarousel } from './screens/home/components/movie-card-carousel.component';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MovieCardCarousel title={"Horror"} movies={MOVIES.slice(0,10)}/>
      <MovieCardCarousel title={"Drama"} movies={MOVIES.slice(10,20)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});
