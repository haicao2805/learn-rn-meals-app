import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface FiltersScreenProps {}

const FiltersScreen: FC<FiltersScreenProps> = () => {
    return (
        <View style={styles.screen}>
            <Text>The Filters Screen</Text>
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

export default FiltersScreen;
