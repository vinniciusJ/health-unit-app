import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background:{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    wrapper: {
        height: '100%'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
       backgroundColor: '#FFF',
       padding: 24,
       maxWidth: 296,
       borderRadius: 4,
       display: 'flex',
       gap: 32
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    successButton: {
        width: '50%',
        backgroundColor: '#0096c7',
        borderRadius: 4,
        paddingVertical: 8,
    },
    cancelButton: {
        width: '50%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 8,
    }
})