import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    opened: {
        borderColor: 'green',
        borderWidth: 1,
        paddingHorizontal: 24,
        borderRadius: 16,
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 32,
    },
    closed: {
        borderColor: 'red',
        borderWidth: 1,
        // width: '60%',
        paddingHorizontal: 24,
        borderRadius: 16,
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 32,
    },
    openedText: {
        color: 'green'
    },
    closedText: {
        color: 'red'
    }
})