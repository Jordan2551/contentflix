import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { MovieCard } from './movie-card.component';

export const MovieCardCarousel = (props) => {
  const { category, movies, horizontal = true, style = {} } = props;

  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text variant="titleLarge" style={styles.category}>
        {category}
      </Text>
      <View>
        <ScrollView horizontal>
          {movies.map((movie, index) => {
            const { id, rating, title, year, image, video } = movie;
            const onPressPrimary = () => {
              navigation.navigate('MovieDetail', { id: movie.id });
            };
            const onPressSecondary = () => {
              console.log(`Add move with id: ${id} to watchlist`);
            };

            return (
              <MovieCard
                key={index}
                id={id}
                rating={rating}
                title={title}
                year={year}
                image={image}
                video={video}
                onPressPrimary={onPressPrimary}
                onPressSecondary={onPressSecondary}
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
    height: 180,
  },
  category: {
    marginBottom: 10,
  },
});
