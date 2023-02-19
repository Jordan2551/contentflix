import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { MovieCard } from "./movie-card.component";

export const MovieCardCarousel = (props) => {
    const { category, movies } = props;

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.category}>{category}</Text>
            <View>
                <ScrollView horizontal>
                    {
                        movies.map(movie => {
                            const {id, rating, title, year, image} = movie;
                            const onPressPrimary = () => { navigation.navigate("MovieDetail", { id: movie.id})};
                            const onPressSecondary = () => { console.log(`Add move with id: ${id} to watchlist`)};

                            return <MovieCard id={id} rating={rating} title={title} year={year} image={image} onPressPrimary={onPressPrimary} onPressSecondary={onPressSecondary} secondaryIcon={'plus'}/>
                        })
                    }
                </ScrollView>

            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        height: 180,
        marginVertical: 30
    },
    category: {
        fontSize: 25,
        marginBottom: 10
    }
});
