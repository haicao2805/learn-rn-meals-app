import { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

interface CategoriesScreenProps {
    navigation: NavigationStackProp;
}

const CategoriesScreen: FC<CategoriesScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button
                title="Go to meals"
                onPress={() => {
                    navigation.navigate("CategoryMeals");
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

export default CategoriesScreen;
