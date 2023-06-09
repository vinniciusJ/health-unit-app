import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        margin: 24,
        marginTop: 64
    },
    goBack: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
        marginBottom: 24
    },
    goBackTitle: {
        fontSize: 18
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 16,
        marginBottom: 24,
    },
    mapContainer: {
        // flex: 1,
        height: 200,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        marginBottom: 8,
    },
    map: {
        flex: 1,
        // height: 200,
        borderRadius: 16
    },
    content: {
        display: 'flex',
        gap: 16,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom: 24,
    },
    info: {
        display: 'flex',
        gap: 12,
        marginBottom: 32,
    },
    infoHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    hoursContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingRight: 28
    },
    hours: {
        width: '75%'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8
    }
})