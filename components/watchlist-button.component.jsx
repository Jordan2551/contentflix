import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { addToWatchlist, removeFromWatchlist } from '../storage';
import { useQueryClient } from 'react-query';
import { useWatchlist } from '../hooks/use-watchlist.hook';

export const WatchlistButton = (props) => {
  const { id } = props;

  const queryClient = useQueryClient();
  const [inWatchlist, setInWatchlist] = useState(false);
  const { watchlist, error, isLoading, refetch } = useWatchlist();

  // Set if the movie is in the watch list after the side effect of getting the watchlist from useWatchlist
  useEffect(() => {
    if (!isLoading && watchlist.includes(id)) {
      setInWatchlist(true);
    } else {
      setInWatchlist(false);
    }
  }, [watchlist, isLoading, error]);

  const onPress = async () => {
    // Determine if secondary action button should add or remove a movie from the watchlist
    if (inWatchlist) {
      await removeFromWatchlist(id);
      setInWatchlist(false);
    } else {
      await addToWatchlist(id);
      setInWatchlist(true);
    }

    // Refetch our watchlist query!
    refetch();
  };

  return (
    <FAB
      icon={inWatchlist ? 'minus' : 'popcorn'}
      size={'small'}
      color="black"
      style={styles.addToWatchList}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  addToWatchList: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
});
