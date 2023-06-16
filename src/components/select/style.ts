import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 8,
    },
    selectContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        color: '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    select: {
        paddingRight: 24 ,
        color: '#747373'
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },

    label: {
        fontWeight: 'bold'
    }
})