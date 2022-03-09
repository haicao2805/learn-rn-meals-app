import { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigate, useParams, useSearchParams } from "react-router-native";
import { CATEGORIES } from "../data/dummy-category";
import MobileHeader from "../components/MobileHeader";

interface CategoryMealsScreenProps {}

const CategoryMealsScreen: FC<CategoryMealsScreenProps> = () => {
    const navigation = useNavigate();
    const { categoryId } = useParams();

    const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

    return (
        <>
            <MobileHeader
                title="Categories"
                showBackButton={true}
                onClickBackButton={() => {
                    navigation("/");
                }}
                backButtonBackgroundColor={selectedCategory?.color}
            />
            <View
                style={{
                    ...styles.screen,
                    backgroundColor: selectedCategory?.color,
                }}
            >
                <Text>The Category Meal Screen</Text>
                <Text>{selectedCategory?.title}</Text>
                <Button title="Go to meal detail" onPress={() => {}} />
                <Button
                    title="Go back"
                    onPress={() => {
                        navigation("/");
                    }}
                />
            </View>
        </>
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
