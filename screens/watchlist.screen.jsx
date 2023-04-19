import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MD2Colors, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MovieCardCarousel } from '../components/movie-card/movie-card-carousel.component';
import { getMoviesByIds } from '../core/utils';
import { useWatchlist } from '../core/hooks/use-watchlist.hook';
import { useContentfulData } from '../core/hooks/use-contentful-data.hook';
import { Loading } from '../components/app-state/loading.component';
import { Error } from '../components/app-state/error.component';

export const WatchlistScreen = () => {
  const { movies, isError, isLoading } = useContentfulData();
  const {
    watchlist,
    isError: isWatchlistError,
    isLoading: isWatchlistLoading,
  } = useWatchlist();

  const watchlistMovies = useMemo(() => {
    return getMoviesByIds(movies, watchlist);
  }, [watchlist, isLoading, isError]);

  if (isLoading || isWatchlistLoading) {
    return <Loading />;
  }

  if (isError || isWatchlistError) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      {watchlistMovies.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <MovieCardCarousel movies={watchlistMovies} horizontal={false} />
        </ScrollView>
      ) : (
        <View style={styles.noMoviesContainer}>
          <Text variant="headlineLarge">
            No movies found
            <Icon name={'popcorn'} size={30} color={MD2Colors.redA200} />
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
