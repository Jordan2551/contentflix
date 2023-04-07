import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { MovieCard } from './movie-card.component';

export const MovieCardCarousel = (props) => {
  const { category, movies, horizontal = true, style = {} } = props;

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text variant="titleLarge">{category}</Text>
      <View>
        <ScrollView
          horizontal={horizontal}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {movies.map((movie, index) => {
            const { id, rating, title, year, image } = movie;

            return (
              <MovieCard
                key={index}
                id={id}
                rating={rating}
                title={title}
                year={year}
                image={image}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
