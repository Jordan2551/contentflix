import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { isError, useQuery } from 'react-query';
import { MovieCardCarousel } from '../components/movie-card-carousel.component';
import { getMovies } from '../components/utils';
import { getWatchlist } from '../storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const WatchlistScreen = () => {
  const { params } = useRoute();
  const [watchlist, setWatchlist] = useState([]);

  // MAKE ADDING / REMOVING CARDS RESPONSIVE TO ALL TABS
  // Make phase 1 where the cards dont update when clicking add then start improving it in next video
  // Make phase 2 into a hook that enables adding / removing of watchlist item and re-rendering on useFocusEffect, etc
  // Make into a hook. See how this logic is exactly the same as watchlist-button.component?
  const { error, isLoading } = useQuery('query', getWatchlist, {
    onSuccess: (data) => {
      const movies = getMovies(data);
      setWatchlist(movies);
    },
  });
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <MovieCardCarousel movies={watchlist} horizontal={false} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
