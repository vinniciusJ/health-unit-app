import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 16,
        right: 16,
        zIndex: 999,
        height: 280,
        borderRadius: 16,
        backgroundColor: '#FFF',
        paddingTop: 32,
        paddingHorizontal: 24,
        display: 'flex',
        gap: 24
    },  
    searching: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        zIndex: 999,
        backgroundColor: '#FFF',
        paddingTop: 64,
        paddingHorizontal: 24,
        display: 'flex',
        gap: 24,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        width: '100%',
        justifyContent: 'space-between'
    },
    typeFilter: {
        position: 'absolute',
        top: 64,
        right: 32,
        
        zIndex: 999,
    },
    select: {
        borderRadius: 16
    }
})