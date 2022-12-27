import { StyleSheet } from "react-native";

import { COLORS } from "../../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.gray500,
        borderRadius: 8,
        marginVertical: 4,
        padding: 12,
        paddingRight: 4
    },
    checkbox: {
        justifyContent:'center',
        alignItems: 'center'
    },
    taskConteiner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8
    },
    taskText: {
        color: COLORS.gray100,
        marginHorizontal: 6,
    },
    taskTextDone: {
        color: COLORS.gray300,
        textDecorationLine: 'line-through',
        marginHorizontal: 6
    },
    button: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginLeft: 4,
    },
    buttonPressed: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginLeft: 4,
        backgroundColor: COLORS.gray400
    },
    trash: {
        color: COLORS.gray300,
    },
    trashPressed: {
        color: COLORS.danger,
    }
});