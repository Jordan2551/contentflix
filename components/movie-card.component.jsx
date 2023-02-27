import React, { useCallback, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import { CustomBadge } from './custom-badge.component';
import { CustomButton } from './custom-button.component';
import {
  isMovieInWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from '../storage';

// TODO:: how to set up a universal theme?
export const MovieCard = (props) => {
  const { id, rating, title, year, image } = props;
  const [inWatchlist, setInWatchlist] = useState(false);

  // THIS IS TOO COMPLICATED
  useEffect(() => {
    const init = async () => {
      if (await isMovieInWatchlist(id)) {
        setInWatchlist(true);
      } else {
        setInWatchlist(false);
      }
    };
    init();
  }, []);
  console.log(
    '🚀 ~ file: movie-card.component.jsx:12 ~ MovieCard ~ inWatchlist:',
    inWatchlist
  );

  const onPressPrimary = () => {
    navigation.navigate('MovieDetail', { id: id });
  };

  const onPressSecondary = async () => {
    console.log(
      '🚀 ~ file: movie-card.component.jsx:18 ~ onPressSecondary ~ isMovieInWatchlist:',
      inWatchlist
    );

    // Determine if secondary action button should add or remove a movie from the watchlist
    if (inWatchlist) {
      await removeFromWatchlist(id);
      setInWatchlist(false);
    } else {
      await addToWatchlist(id);
      setInWatchlist(true);
    }
  };

  return (
    <ImageBackground
      imageStyle={styles.image}
      source={image}
      style={styles.imageContainer}
    >
      <View style={styles.colorOverlay} />
      <CustomBadge text={rating} style={styles.badge} />
      <View style={styles.contentContainer}>
        <Text variant="titleLarge" style={styles.title}>
          {title}
        </Text>
        <Text variant="titleMedium" style={styles.subtitle}>
          {year}
        </Text>
        <View style={styles.watchNowContainer}>
          <CustomButton text={'Watch Now'} onPress={onPressPrimary} />
          <FAB
            icon={inWatchlist ? 'minus' : 'plus'}
            size={'small'}
            color="black"
            style={styles.addToWatchList}
            onPress={onPressSecondary}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  colorOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    color: 'red',
  },
  addToWatchList: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  image: {
    borderRadius: 20,
  },
  imageContainer: {
    marginRight: 15,
    width: 180,
    height: 180,
  },
  title: {
    color: 'white',
  },
  subtitle: {
    color: 'white',
    fontWeight: '300',
  },
  watchNowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    marginTop: 10,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
});
