import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { CustomBadge } from './custom-badge.component';

// NOTE: this will only work with expo. If using RN CLI, use react-native-video: https://blog.logrocket.com/adding-videos-react-native-react-native-video/
import { Video } from 'expo-av';

export const MovieDetail = (props) => {
  const { movie } = props;
  const { title, image, rating, description, year, video } = movie;
  const videoPlayerRef = useRef(null);

  return (
    <View>
      <Video
        source={{ uri: video }}
        ref={videoPlayerRef}
        posterSource={{ uri: image }}
        style={styles.video}
        onReadyForDisplay={() => {
          // Gets called whenever video source changes. Reset player position back to 0
          // We do this because we can't do a navigation.reset for navigating to movie-detail as that will get rid of the initial navigaiton from discover
          videoPlayerRef.current.setPositionAsync(0);
        }}
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
      </View>
    </View>
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
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  description: {
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  year: {
    marginTop: 5,
  },
  imageContainer: {
    width: '100%',
    height: 250,
  },
});
