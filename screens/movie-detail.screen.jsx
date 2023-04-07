import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Text } from 'react-native-paper';
import { MovieDetail } from '../components/movie-detail.component';
import { filterMoviesByCategory, getMovieById } from '../components/utils';
import { useContentfulData } from '../hooks/use-contentful-data.hook';
import { MovieCardCarousel } from '../components/movie-card-carousel.component';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Loading } from '../components/core/loading.component';

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

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
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
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
