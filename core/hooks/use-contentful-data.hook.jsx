import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getContentfulData } from '../../contentful/contentful-client';

export const GET_CONTENTFUL_ENTRIES_QUERY_KEY = 'get_contentful_entries';

export const useContentfulData = () => {
  const {
    data: contentfulData,
    isError,
    isLoading,
  } = useQuery(GET_CONTENTFUL_ENTRIES_QUERY_KEY, {
    queryFn: getContentfulData,
  });

  const movies = useMemo(() => {
    if (!isLoading && !isError) {
      return contentfulData;
    } else {
      return [];
    }
  }, [contentfulData, isLoading, isError]);

  return {
    movies,
    isError,
    isLoading,
  };
};
