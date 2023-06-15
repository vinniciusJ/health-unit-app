import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 9999
    },
    container: {
        width: '80%',
        height: '100%',
        paddingHorizontal: 16,
        paddingVertical: 64,
        backgroundColor: '#FFF'
    },
    content: {
        display: 'flex',
        gap: 16,
        height: '100%',
    },
    close: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 16,
    },
    list: {
        display: 'flex',
        gap: 16,
        marginTop: 32,
        marginLeft: 2
    },
    item: {
        justifyContent: 'flex-start',
        gap: 18,
        paddingVertical: 8
    },
    itemText: {
        fontSize: 18,
    },
    logout: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%'
    },
    logoutButton: {
        borderWidth: 1,
        borderColor: '·6c757d',
        width: '100%',
        paddingVertical: 8,
    },
    logoutText: {
        fontSize: 18
    }
})