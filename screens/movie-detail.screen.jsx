import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { MovieDetail } from '../components/movie-detail.component';
import { MOVIES } from '../constants/movies';

export const MovieDetailScreen = () => {
  const { params } = useRoute();
  const id = params?.id;

  const movie = useMemo(() => {
    return MOVIES.find((currentMovie) => currentMovie.id === id);
  }, [id]);

  if (!movie) {
    return <Text>Error: movie with id: {id} not found!</Text>;
  }

  return <MovieDetail movie={movie} />;
};
