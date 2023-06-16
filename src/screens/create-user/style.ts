import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    header: {
        marginBottom: 32,
        marginTop: 12,
        display: 'flex',
        gap: 12
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',   
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