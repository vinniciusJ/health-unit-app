import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 8,
        // width: '100%',
    },
    input: {
        height: 40,
        borderRadius: 4,
        width: '100%',
        borderWidth: 1,
        borderColor: '#CCC',
        padding: 8,
        backgroundColor: '#fff'
    },
    label: {
        fontWeight: 'bold'
    }
})