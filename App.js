import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MOVIE_CATEGORIES } from './constants/movie-categories';
import { MOVIES } from './constants/movies';
import { MovieCardCarousel } from './screens/home/components/movie-card-carousel/movie-card-carousel.component';
import { getMoviesByCategories } from './screens/home/components/movie-card-carousel/utils';

const moviesByCategories = getMoviesByCategories(MOVIES);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* // TODO:: REFACTOR THIS */}
      <ScrollView>
        {
          MOVIE_CATEGORIES.map(category => {
            return (<MovieCardCarousel category={category} movies={moviesByCategories[category]}/>)
          })
        }
      </ScrollView>
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
