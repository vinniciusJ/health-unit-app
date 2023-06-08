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
    scrollable: {
        columnGap: 16,
    },
    closests: {
        display: 'flex',
        gap: 16,
    }
})