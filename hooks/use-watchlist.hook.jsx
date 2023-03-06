import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '../components/utils';
import { getWatchlist } from '../storage';

export const WATCHLIST_QUERY_KEY = 'watchlist';

export const useWatchlist = () => {
  const { data, error, isLoading } = useQuery(
    WATCHLIST_QUERY_KEY,
    getWatchlist,
    {
      refetchOnWindowFocus: true,
    }
  );

  return {
    watchlist: data,
    error,
    isLoading,
  };
};
