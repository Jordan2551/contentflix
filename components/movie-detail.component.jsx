import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { MOVIES } from '../constants/movies';
import { CustomBadge } from './custom-badge.component';
import { MovieCardCarousel } from './movie-card-carousel.component';
import { filterMoviesByCategory, getMoviesByCategories } from './utils';

// NOTE: this will only work with expo. If using RN CLI, use react-native-video: https://blog.logrocket.com/adding-videos-react-native-react-native-video/
import { Video } from 'expo-av';

export const MovieDetail = (props) => {
  const { movie, movies } = props;
  const { title, image, rating, description, year, category, video } = movie;

  // TODO:: SEPARATE MOVEI DETAIL FROM CAROUSEL
  return (
    <ScrollView>
      <Video
        source={{ uri: video }}
        style={styles.video}
        posterSource={image}
        useNativeControls
      />
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
            movies={filterMoviesByCategory(movies, category)}
            horizontal={true}
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

  video: {
    height: 250,
    width: '100%',
  },

  contentContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
