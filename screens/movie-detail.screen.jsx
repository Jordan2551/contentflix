import React, { useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { MovieDetail } from '../components/movie-detail.component';
import { filterMoviesByCategory, getMovieById } from '../core/utils';
import { useContentfulData } from '../core/hooks/use-contentful-data.hook';
import { MovieCardCarousel } from '../components/movie-card/movie-card-carousel.component';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Loading } from '../components/app-state/loading.component';
import { Error } from '../components/app-state/error.component';

export const MovieDetailScreen = () => {
  const { params } = useRoute();
  const { movies, isError, isLoading } = useContentfulData();

  const id = params?.id;

  const movie = useMemo(() => {
    return getMovieById(movies, id);
  }, [id]);

  const moviesByCategory = useMemo(() => {
    return filterMoviesByCategory(movies, movie.category);
  }, [movies, movie.category]);

  if (!movie) {
    return <Text>isError: movie with id: {id} not found!</Text>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <ScrollView>
      <MovieDetail movie={movie} />
      <View style={styles.watchMoreContainer}>
        <Text variant="headlineMedium">Watch more {movie.category}</Text>
        <MovieCardCarousel
          key={movie.category}
          movies={moviesByCategory}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  watchMoreContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
