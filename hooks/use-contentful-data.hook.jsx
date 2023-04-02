import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getMoviesByCategories } from '../components/utils';
import { getContentfulData } from '../contentful-client';

export const GET_CONTENTFUL_ENTRIES_QUERY_KEY = 'get_contentful_entries';

export const UseContentfulData = () => {
  const {
    data: contentfulData,
    error,
    isLoading,
  } = useQuery(GET_CONTENTFUL_ENTRIES_QUERY_KEY, {
    queryFn: getContentfulData,
  });
  console.log(
    '🚀 ~ file: use-contentful-data.hook.jsx:15 ~ UseContentfulData ~ error:',
    error
  );
  console.log(
    '🚀 ~ file: use-contentful-data.hook.jsx:15 ~ UseContentfulData ~ isLoading:',
    isLoading
  );

  const data = useMemo(() => {
    // Parse our data in a useable format
    if (!isLoading && !error) {
      console.log('YOOO');

      // TEST BACKUP DATA
      if (contentfulData.items) {
        const result = [];

        // contentfulData.items.forEach(())

        // result = contentfulData.items.forEach((item) => ({
        //   // if('')
        //   id: item.sys.id,
        //   type: item.sys.type,
        //   title: item.fields.title,
        //   description: item.fields.description,
        //   category: item.fields?.category?.sys?.id,
        //   rating: item.fields.rating,
        //   year: item.fields.year,
        //   image: item.fields.image.sys.id,
        //   video: item.fields.video.sys.id,
        // }));
        // console.log(
        //   '🚀 ~ file: use-contentful-data.hook.jsx:50 ~ data ~ result:',
        //   result
        // );
      }
    }
    // Return the default static set of movie data in case we were not able to parse the Contentful data
    return getMoviesByCategories();
  }, [contentfulData, isLoading, error]);

  return {
    data,
    error,
    isLoading,
  };
};
