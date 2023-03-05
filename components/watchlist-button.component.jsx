import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { addToWatchlist, removeFromWatchlist, getWatchlist } from '../storage';
import { useQuery } from 'react-query';

export const WatchlistButton = (props) => {
  const { id } = props;
  const [inWatchlist, setInWatchlist] = useState(false);

  // Note: demonstrate how this works with and without cache
  useQuery('getWatchlist', getWatchlist, {
    onSuccess: (watchlist) => {
      setInWatchlist(watchlist.includes(id));
    },
  });

  const onPress = async () => {
    // Determine if secondary action button should add or remove a movie from the watchlist
    if (inWatchlist) {
      await removeFromWatchlist(id);
      setInWatchlist(false);
    } else {
      await addToWatchlist(id);
      setInWatchlist(true);
    }
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
