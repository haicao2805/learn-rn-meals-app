import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface MealDetailScreenProps {}

const MealDetailScreen: FC<MealDetailScreenProps> = () => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
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

export default MealDetailScreen;
