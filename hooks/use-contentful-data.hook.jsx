import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getMovieCategories } from '../components/utils';
import { getContentfulData } from '../contentful-client/contentful-client';

export const GET_CONTENTFUL_ENTRIES_QUERY_KEY = 'get_contentful_entries';

export const useContentfulData = () => {
  const {
    data: contentfulData,
    error,
    isLoading,
  } = useQuery(GET_CONTENTFUL_ENTRIES_QUERY_KEY, {
    queryFn: getContentfulData,
  });

  const movies = useMemo(() => {
    if (!isLoading && !error) {
      return contentfulData;
    } else {
      return [];
    }
  }, [contentfulData, isLoading, error]);

  const categories = useMemo(() => {
    if (!isLoading && !error) {
      return getMovieCategories(movies);
    } else {
      return [];
    }
  }, [movies, isLoading, error]);

  return {
    movies,
    categories,
    error,
    isLoading,
  };
};
