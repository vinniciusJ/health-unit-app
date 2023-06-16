import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 32,
        marginTop: 24,
    },
    form: {
        display: 'flex',
        gap: 24
    },
    grid: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
    },
    gridItem: {
        width: '47.5%'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 8,
        marginTop: 24,
    },
    buttons: {
        paddingVertical: 12,
        // paddingHorizontal: 16,
        width: '30%',
    },
    cancel: {
        borderWidth: 1,
        borderColor: '#6c757d'
    },
    edit: {
        backgroundColor: '#0096c7'
    },
    select: {
        height: 40,
    }
})