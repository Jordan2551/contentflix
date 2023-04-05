import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MovieCardCarousel } from '../components/movie-card-carousel.component';
import {
  filterMoviesByCategory,
  filterMoviesByQuery,
} from '../components/utils';
import { Searchbar } from 'react-native-paper';
import { useContentfulData } from '../hooks/use-contentful-data.hook';
import { Loading } from '../components/core/loading.component';
import { Error } from '../components/core/error.component';

export const DiscoverScreen = () => {
  const { movies, categories, error, isLoading } = useContentfulData();
  const [search, setSearch] = useState('');

  const filteredMovies = useMemo(() => {
    return filterMoviesByQuery(movies, search);
  }, [movies, search]);

  const onSearchChange = (query) => {
    setSearch(query);
  };

  if (isLoading) {
    return <Loading />;
  }

  // TODO:: GREAT BUT APP WONT ACTUALLY GET TO THIS STATE IF ERROR RAISES
  if (error) {
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
    backgroundColor: '#fff',
    padding: 15,
  },
  searchBar: {
    backgroundColor: '#f3f3f3',
  },
  movieCardCarousel: {
    marginVertical: 15,
  },
});
