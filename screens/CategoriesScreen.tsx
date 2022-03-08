import { FC } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationStackProp } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-category";
import { Category } from "../models/category";

interface CategoriesScreenProps {
    navigation: NavigationStackProp;
}

export interface ListRenderItemInfo<ItemT> {
    item: ItemT;

    index: number;

    separators: {
        highlight: () => void;
        unhighlight: () => void;
        updateProps: (select: "leading" | "trailing", newProps: any) => void;
    };
}

const CategoriesScreen: FC<CategoriesScreenProps> = ({ navigation }) => {
    const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    navigation.navigate("CategoryMeals");
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    );
};

// CategoriesScreen.navigationOptions = {
//     headerTitle: "Meal Categories",
// };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 100,
    },
});

export default CategoriesScreen;
