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
        borderRadius: 16,
        
    },
    openOnMapButton: {
        backgroundColor: '#0096c7',
        paddingVertical: 12,
    },
    openOnMapLabel: {
        color: '#FFF'
    },
    content: {
        display: 'flex',
        gap: 16,
        marginBottom: 80,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
        marginBottom: 24,
    },
    yourUBSTag: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        height: 28,
        paddingHorizontal: 24,
        borderRadius: 16,
        borderColor: '#0096c7'
    },
    yourUBSLabel: {
        color: '#0096c7'
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        
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
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 96,
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,

    },
    actionsButtons: {
        width: '50%',
        height: 48,
    },
    phoneButton: {
        borderWidth: 1,
        borderColor: '#38b000'
    },
    addToMyUBS: {
        borderWidth: 1,
        borderColor: '#0096c7'
    },
    myUBS: {
        backgroundColor: '#0096c7'
    },
    modalText: {
        lineHeight: 24
    }
})