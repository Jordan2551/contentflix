import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Badge, Button, Text, Title } from 'react-native-paper';
import { MOVIES } from '../constants/movies';
import { CustomBadge } from './custom-badge.component';
import { MovieCardCarousel } from './movie-card-carousel.component';
import { getMoviesByCategories } from './utils';

const moviesByCategories = getMoviesByCategories(MOVIES);

export const MovieDetail = (props) => {
  const { movie } = props;
  const { title, image, rating, description, year, category } = movie;

  return (
    <ScrollView>
      <ImageBackground source={image} style={styles.imageContainer} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text variant="headlineLarge">{title}</Text>
          <CustomBadge text={rating} />
        </View>
        <Text variant="headlineMedium" style={styles.year}>
          {year}
        </Text>
        <Text variant="bodyLarge" style={styles.description}>
          {description}
        </Text>
        <View style={styles.watchMoreContainer}>
          <Text variant="headlineMedium">Watch more {category}</Text>
          <MovieCardCarousel
            key={category}
            movies={moviesByCategories[category]}
            horizontal={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    // backgroundColor: 'tomato',
    justifyContent: 'space-between',
  },

  description: {
    marginVertical: 10,
  },

  year: {
    marginTop: 5,
  },

  imageContainer: {
    width: '100%',
    height: 250,
  },

  watchMoreContainer: {
    marginVertical: 20,
  },
});
