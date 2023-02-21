import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MOVIE_CATEGORIES } from '../constants/movie-categories';
import { MOVIES } from '../constants/movies';
import { MovieCardCarousel } from '../components/movie-card-carousel.component';
import { getMoviesByCategories } from '../components/utils';

const moviesByCategories = getMoviesByCategories(MOVIES);

export const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {MOVIE_CATEGORIES.map((category) => {
          return (
            <MovieCardCarousel
              key={category}
              category={category}
              movies={moviesByCategories[category]}
              style={{ marginVertical: 30 }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});
