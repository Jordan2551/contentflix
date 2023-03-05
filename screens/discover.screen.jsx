import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MovieCardCarousel } from '../components/movie-card-carousel.component';
import { filterMovies } from '../components/utils';
import { Searchbar } from 'react-native-paper';

export const DiscoverScreen = () => {
  const [filteredMovies, setFilteredMovies] = useState(filterMovies(''));
  const [search, setSearch] = useState('');

  const movieCategories = Object.keys(filteredMovies);

  const onSearchChange = (query) => {
    setSearch(query);
    setFilteredMovies(filterMovies(query));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Searchbar
          placeholder="Search for movies!"
          onChangeText={onSearchChange}
          value={search}
          style={styles.searchBar}
        />
        {movieCategories.map((category) => {
          return (
            <MovieCardCarousel
              key={category}
              category={category}
              movies={filteredMovies[category]}
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
