import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        maxHeight: '100%',
        minWidth: 146,
        width: '100%',
        // border: '1px solid #ccc'
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ccc',
    },
    info: {
        display: 'flex',
        gap: 8, 
    }
})