import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Text } from 'react-native-paper';
import { MovieDetail } from '../components/movie-detail.component';
import { filterMoviesByCategory, getMovieById } from '../components/utils';
import { useContentfulData } from '../hooks/use-contentful-data.hook';
import { MovieCardCarousel } from '../components/movie-card-carousel.component';
import { ScrollView, StyleSheet, View } from 'react-native';

export const MovieDetailScreen = () => {
  const { params } = useRoute();
  const { movies, error, isLoading } = useContentfulData();

  const id = params?.id;

  const movie = useMemo(() => {
    return getMovieById(movies, id);
  }, [id]);

  console.log('🚀 ~ file: movie-detail.screen.jsx:17 ~ movie ~ movie:', movie);
  if (!movie) {
    return <Text>Error: movie with id: {id} not found!</Text>;
  }

  // TODO:: LOADING COMPONENT, ERROR COMPONENT
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} color={MD2Colors.amber800} />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieDetail movie={movie} />
      <View style={styles.watchMoreContainer}>
        <Text variant="headlineMedium">Watch more {movie.category}</Text>
        <MovieCardCarousel
          key={movie.category}
          movies={filterMoviesByCategory(movies, movie.category)}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  watchMoreContainer: {
    marginVertical: 20,
  },
});
