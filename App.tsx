import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onError={(e) => console.log(e)}
                onFinish={() => {
                    setFontLoaded(true);
                }}
            />
        );
    }

    return (
        <NativeRouter>
            <View style={styles.container}>
                <Routes>
                    <Route path={"/"} element={<CategoriesScreen />} />
                    <Route
                        path={"/category-meals/:categoryId"}
                        element={<CategoryMealsScreen />}
                    />
                </Routes>
            </View>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
