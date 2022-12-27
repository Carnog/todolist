import { StyleSheet } from "react-native";

import { COLORS } from "../../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray700,
        color: COLORS.gray400,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    image: {
        marginBottom: 40,
    },
    form: {
        flexDirection: 'row',
        marginBottom: 32,
    },
    input: {
        flex: 1,
        backgroundColor: COLORS.gray500,
        color: COLORS.gray100,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 16,
    },
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
    buttonText: {
        color: COLORS.gray100
    },
    tasks: {
        flex: 1,
        width: '100%'
    },
    info: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20,

    },
    box: {
        flexDirection: 'row',
    },
    created: {
        color: COLORS.blue,
        fontWeight: 'bold',
    },
    done: {
        color: COLORS.purple,
        fontWeight: 'bold',
    },
    counter: {
        color: COLORS.gray200,
        backgroundColor: COLORS.gray400,
        marginLeft: 8,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 999,
    },
    list: {
        width: '100%',
    },
    empty: {
        width: '100%',
        alignItems: 'center',
    },
    emptyImage: {
        marginTop: 48,
        marginBottom: 16,
    },
    emptyText: {
        color: COLORS.gray300,
        fontSize: 14,
        lineHeight: 19.6
    },
    textBold: {
        fontWeight: 'bold'
    },
    taskText: {
        color: COLORS.gray100,
    },
    taskTextDone: {
        color: COLORS.gray300,
        textDecorationLine: 'line-through'
    }
});