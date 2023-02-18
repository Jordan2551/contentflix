import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { MovieCard } from "./movie-card.component";

export const MovieCardCarousel = (props) => {
    const { title, movies } = props;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View>
                <ScrollView horizontal>
                    {
                        movies.map(movie => {
                            const {id, rating, title, year, image} = movie;
                            return <MovieCard id={id} rating={rating} title={title} year={year} image={image}/>
                        })
                    }
                </ScrollView>

            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        height: 200,
        marginVertical: 30
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginBottom: 10
    }
});
