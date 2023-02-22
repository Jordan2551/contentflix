import React, { useCallback } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import { CustomBadge } from './custom-badge.component';
import { CustomButton } from './custom-button.component';

// TODO:: how to set up a universal theme?
export const MovieCard = (props) => {
  const { rating, title, year, image, onPressPrimary, onPressSecondary } =
    props;

  return (
    <ImageBackground
      imageStyle={styles.image}
      source={image}
      style={styles.imageContainer}
    >
      <View style={styles.colorOverlay} />
      <CustomBadge
        text={rating}
        style={{ marginTop: 10, marginLeft: 10, alignSelf: 'flex-start' }}
      />
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
            icon={'star-plus'}
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
});
