import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MovieCardCarousel } from '../components/movie-card-carousel.component';
import {
  filterMoviesByCategory,
  filterMoviesByQuery,
} from '../components/utils';
import { ActivityIndicator, MD2Colors, Searchbar } from 'react-native-paper';
import { useContentfulData } from '../hooks/use-contentful-data.hook';

export const DiscoverScreen = () => {
  const { movies, categories, error, isLoading } = useContentfulData();
  const [search, setSearch] = useState('');

  const filteredMovies = useMemo(() => {
    return filterMoviesByQuery(movies, search);
  }, [movies, search]);

  const onSearchChange = (query) => {
    setSearch(query);
  };

  // TODO:: LOADING COMPONENT
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} color={MD2Colors.amber800} />
      </View>
    );
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: '#f3f3f3',
  },
  movieCardCarousel: {
    marginVertical: 15,
  },
});
