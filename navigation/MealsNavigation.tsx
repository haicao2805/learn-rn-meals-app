import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { COLORS } from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            title: "Categories",
            headerStyle: {
                backgroundColor: COLORS.PRIMARY,
            },
            headerTintColor: "white",
        },
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
            title: "Category Meals",
        },
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: {
            title: "Meal Detail",
        },
    },
});

export default createAppContainer(MealsNavigator);
