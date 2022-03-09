import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

interface MobileButtonProps {
    title: string;
    disable?: boolean;
    onPress: () => void;
    styles?: {};
    backgroundColor?: string;
}

const MobileButton: FC<MobileButtonProps> = ({
    title,
    disable,
    onPress,
    styles,
    backgroundColor,
}) => {
    return (
        <>
            {disable && (
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        ...internalStyles.container,
                        ...styles,
                        backgroundColor: backgroundColor
                            ? backgroundColor
                            : COLORS.ACCENT,
                    }}
                    onPress={onPress}
                >
                    <Text style={internalStyles.title}>{title}</Text>
                </TouchableOpacity>
            )}
        </>
    );
};

const internalStyles = StyleSheet.create({
    container: {
        marginLeft: 5,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderWidth: 1,
        overflow: "hidden",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});

export default MobileButton;
