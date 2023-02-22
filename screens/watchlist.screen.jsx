import { useRoute } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Text } from 'react-native-paper';
import { MovieDetail } from '../components/movie-detail.component';
import { MOVIES } from '../constants/movies';

export const WatchlistScreen = () => {
  const { params } = useRoute();
  console.log(
    '🚀 ~ file: watchlist.screen.jsx:9 ~ WatchlistScreen ~ params:',
    params
  );
  // const { id } = params;

  return <Text>WATCHLIST!</Text>;
};
