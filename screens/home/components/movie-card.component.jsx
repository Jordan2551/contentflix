import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { FAB, Text } from "react-native-paper";
import { CustomBadge } from "../../../components/custom-badge.component";
import { CustomButton } from "../../../components/custom-button.component";
import { MOVIES } from "../../../constants/movies";

// TODO:: how to set up a universal theme?
export const MovieCard = (props) => {
    const { id, rating, title, year, image } = props;

    return(
        <ImageBackground imageStyle={styles.image} source={image} style={styles.imageContainer}>
            <View style={styles.colorOverlay}/>
            <CustomBadge text={rating}/>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{year}</Text>
                <View style={styles.watchNowContainer}>
                    <CustomButton text={'Watch Now'} />
                    <FAB
                        icon="plus"
                        size={'small'}
                        style={styles.addToWatchList}
                        onPress={() => console.log('Pressed movie with id: ', id)}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

// TODO:: how to make all text white instead of white for all?

const styles = StyleSheet.create({
    colorOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
        width: 200,
        height: 200,
    },
    title: {
        color: 'white',
        fontSize: 22,
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '300'
    },
    watchNowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  });
