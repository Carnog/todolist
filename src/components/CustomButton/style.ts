import { StyleSheet } from "react-native";

import { COLORS } from "../../../assets/colors";

export const styles = StyleSheet.create({
    button: {
        width: 52,
        height: 52,
        backgroundColor: COLORS.blueDark,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 6,
        marginLeft: 4,
    },
    buttonPressed: {
        width: 52,
        height: 52,
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 6,
        marginLeft: 4,
    },
    buttonText: {
        color: COLORS.gray100
    },
});