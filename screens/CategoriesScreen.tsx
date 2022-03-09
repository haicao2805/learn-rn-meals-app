import { FC } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-category";
import { Category } from "../models/category";
import { useNavigate } from "react-router-native";
import { COLORS } from "../constants/colors";
import MobileHeader from "../components/MobileHeader";

interface CategoriesScreenProps {}

export interface ListRenderItemInfo<ItemT> {
    item: ItemT;

    index: number;

    separators: {
        highlight: () => void;
        unhighlight: () => void;
        updateProps: (select: "leading" | "trailing", newProps: any) => void;
    };
}

const CategoriesScreen: FC<CategoriesScreenProps> = ({}) => {
    const navigation = useNavigate();
    const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    navigation(`/category-meals/${itemData.item.id}`);
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <MobileHeader
                title="Categories"
                showBackButton={false}
                onClickBackButton={() => {}}
            />
            <FlatList
                keyExtractor={(item) => item.id}
                numColumns={2}
                data={CATEGORIES}
                renderItem={renderGridItem}
            />
        </>
    );
};

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
        backgroundColor: COLORS.ACCENT,
    },
});

export default CategoriesScreen;
