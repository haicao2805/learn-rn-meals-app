import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface FavoritesScreenProps {}

const FavoritesScreen: FC<FavoritesScreenProps> = () => {
    return (
        <View style={styles.screen}>
            <Text>The Favorites Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FavoritesScreen;
