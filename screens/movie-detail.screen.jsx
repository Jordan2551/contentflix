import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Text } from 'react-native-paper';
import { MovieDetail } from '../components/movie-detail.component';
import { getMovie } from '../components/utils';

export const MovieDetailScreen = () => {
  const { params } = useRoute();
  const id = params?.id;

  const movie = useMemo(() => {
    return getMovie(id);
  }, [id]);

  if (!movie) {
    return <Text>Error: movie with id: {id} not found!</Text>;
  }

  return <MovieDetail movie={movie} />;
};
