import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MovieCardCarousel } from '../components/movie-card/movie-card-carousel.component';
import {
  filterMoviesByCategory,
  filterMoviesByQuery,
  getMovieCategories,
} from '../core/utils';
import { MD2Colors, Searchbar } from 'react-native-paper';
import { useContentfulData } from '../core/hooks/use-contentful-data.hook';
import { Loading } from '../components/app-state/loading.component';
import { Error } from '../components/app-state/error.component';

export const DiscoverScreen = () => {
  const { movies, isError, isLoading } = useContentfulData();
  const [search, setSearch] = useState('');

  const filteredMovies = useMemo(() => {
    return filterMoviesByQuery(movies, search);
  }, [movies, search]);

  const categories = useMemo(() => {
    return getMovieCategories(filteredMovies);
  }, [filteredMovies, search]);

  const onSearchChange = (query) => {
    setSearch(query);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Searchbar
          placeholder="Search for movies!"
          onChangeText={onSearchChange}
          value={search}
          style={styles.searchBar}
        />
        {categories.map((category) => {
          return (
            <MovieCardCarousel
              key={category}
              category={category}
              movies={filterMoviesByCategory(filteredMovies, category)}
              style={styles.movieCardCarousel}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD2Colors.white,
    padding: 15,
  },
  searchBar: {
    backgroundColor: MD2Colors.grey100,
  },
  movieCardCarousel: {
    marginVertical: 15,
  },
});
