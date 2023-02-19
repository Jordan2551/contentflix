import React from "react";
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";

export const MovieDetail = (props) => {
    const { movie } = props;

    return(
        <View style={styles.container}>
            <Text>{movie.id}</Text>
            <Text>{movie.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        color: 'white',
        // We set backgroundColor and not Opacity because opacity sets the opacity for all child views while backgroundColor only sets opacity of the container
        backgroundColor: 'rgba(208, 54, 28, 0.8)',
    }
})
