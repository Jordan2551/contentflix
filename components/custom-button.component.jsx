import React from "react";
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

export const CustomButton = ({ text }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 13,
        borderRadius: 20,
        // We set backgroundColor and not Opacity because opacity sets the opacity for all child views while backgroundColor only sets opacity of the container
        backgroundColor: 'rgba(208, 54, 28, 0.8)',
    },
    text: {
        fontSize: 15, // TODO:: baseline?
        color: 'white',
    }
})
