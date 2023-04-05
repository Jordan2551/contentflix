import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MovieCardCarousel } from '../components/movie-card-carousel.component';
import { getMoviesByIds } from '../components/utils';
import { useWatchlist } from '../hooks/use-watchlist.hook';
import { useContentfulData } from '../hooks/use-contentful-data.hook';

export const WatchlistScreen = () => {
  const { movies, error, isLoading } = useContentfulData();
  const {
    watchlist,
    error: watchlistError,
    isLoading: isWatchlistLoading,
  } = useWatchlist();

  const watchlistMovies = useMemo(() => {
    return getMoviesByIds(movies, watchlist);
  }, [watchlist, isLoading, error]);

  // TODO:: MAKE LOADING SCREEN
  if (isLoading || isWatchlistLoading) {
    return <Text>Loading...</Text>;
  }

  // TODO:: MAKE ERROR SCREEN
  if (error || watchlistError) {
    return <Text>Error!</Text>;
  }

  return (
    <View style={styles.container}>
      {watchlist.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <MovieCardCarousel movies={watchlistMovies} horizontal={false} />
        </ScrollView>
      ) : (
        <View style={styles.noMoviesContainer}>
          <Text variant="headlineLarge">
            No movies found
            <Icon name={'popcorn'} size={30} color="rgba(208, 54, 28, 0.8)" />
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  noMoviesContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
