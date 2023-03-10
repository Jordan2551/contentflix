import { useQuery } from 'react-query';
import { getWatchlist } from '../storage';

export const WATCHLIST_QUERY_KEY = 'watchlist';

export const useWatchlist = () => {
  const { data, error, isLoading, refetch } = useQuery(
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
    refetch,
  };
};
