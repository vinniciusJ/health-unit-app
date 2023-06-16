import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 64,
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    logoTitle: {
        fontSize: 48,
    },
    form: {
        width: '80%',
        gap: 24,
    },
    input: {
        height: 40,
        borderRadius: 4,
        width: '100%',
        borderWidth: 1,
        padding: 8,
    },
    loginButton: {
        backgroundColor: '#0096c7',
        width: '80%',
        paddingVertical: 12
    },
    createAccount: {
        position: 'absolute',
        bottom: 48,
        width: '100%'
    },
})