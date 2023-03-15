import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MovieCardCarousel } from '../components/movie-card-carousel.component';
import { getMovies } from '../components/utils';
import { useWatchlist } from '../hooks/use-watchlist.hook';

export const WatchlistScreen = () => {
  const { watchlist, error, isLoading } = useWatchlist();

  const watchlistMovies = useMemo(() => {
    return getMovies(watchlist);
  }, [watchlist, isLoading, error]);

  // TODO:: MAKE LOADING SCREEN
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // TODO:: MAKE ERROR SCREEN
  if (error) {
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
