import { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

interface MealDetailScreenProps {
    navigation: NavigationStackProp;
}

const MealDetailScreen: FC<MealDetailScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
            <Button
                title="Go back to categories"
                onPress={() => {
                    navigation.popToTop();
                }}
            />
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
