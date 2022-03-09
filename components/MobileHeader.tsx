import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import MobileButton from "./MobileButton";

interface MobileHeaderProps {
    title: string;
    showBackButton?: boolean;
    onClickBackButton: () => void;
    backButtonBackgroundColor?: string;
}

const MobileHeader: FC<MobileHeaderProps> = ({
    title,
    showBackButton,
    onClickBackButton,
    backButtonBackgroundColor,
}) => {
    return (
        <View style={styles.container}>
            <MobileButton
                title="Back"
                onPress={onClickBackButton}
                disable={showBackButton}
                backgroundColor={backButtonBackgroundColor}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "10%",
        backgroundColor: COLORS.PRIMARY,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 5,
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        marginHorizontal: 15,
    },
});

export default MobileHeader;
