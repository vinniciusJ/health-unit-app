import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        maxHeight: '100%',
        width: 146,
        // border: '1px solid #ccc'
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ccc',
    },
    opened: {
        borderColor: 'green',
        borderWidth: 1,
        width: '50%',
        borderRadius: 16,
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closed: {
        borderColor: 'red',
        borderWidth: 1,
        width: '60%',
        borderRadius: 16,
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    openedText: {
        color: 'green'
    },
    closedText: {
        color: 'red'
    }
})