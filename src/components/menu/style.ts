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
    close: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})