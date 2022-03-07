import { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

interface CategoryMealsScreenProps {
    navigation: NavigationStackProp;
}

const CategoryMealsScreen: FC<CategoryMealsScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Button
                title="Go to meal detail"
                onPress={() => {
                    navigation.navigate("MealDetail");
                }}
            />
            <Button
                title="Go back"
                onPress={() => {
                    navigation.goBack();
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

export default CategoryMealsScreen;
