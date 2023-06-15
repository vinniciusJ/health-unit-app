import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        
    },
    goBack: {
       gap: 16,
       justifyContent: 'flex-start'
    },
    goBackTitle: {
        fontSize: 18
    },
    emptyHealthUnit: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyHealthUnitMessage: {
        lineHeight: 28,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 48,
    },
    addMyUBS:{
        backgroundColor: '#0096c7',
        paddingHorizontal: 24,
        paddingVertical: 8,
    }
})