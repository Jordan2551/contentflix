import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Text } from 'react-native-paper';
import { MovieDetail } from '../components/movie-detail.component';
import { getMovieById } from '../components/utils';
import { useContentfulData } from '../hooks/use-contentful-data.hook';

export const MovieDetailScreen = () => {
  const { params } = useRoute();
  const { movies, error, isLoading } = useContentfulData();

  const id = params?.id;

  const movie = useMemo(() => {
    return getMovieById(movies, id);
  }, [id]);

  if (!movie) {
    return <Text>Error: movie with id: {id} not found!</Text>;
  }

  // TODO:: LOADING COMPONENT
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} color={MD2Colors.amber800} />
      </View>
    );
  }

  return <MovieDetail movie={movie} movies={movies} />;
};
