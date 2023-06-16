import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 16,
        marginTop: 24,
    },
    userInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        marginBottom: 32
    },
    avatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 128,
        backgroundColor: '#ccc',
        padding: 38
    },
    initials: {
        fontSize: 32,
        color: '#000'
    },
    editContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    fullname: {
        fontSize: 32,
        marginBottom: 8
    },
    email: {
        textAlign: 'center',
        color: '#6c757d'
    },
    userUBS: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        display: 'flex',
        gap: 16
    },
    yourUBS: {
        fontSize: 20,
        fontWeight: 'bold',
        // marginBottom: 8,
    },
    map: {
        flex: 1,
        // height: 200,
        borderRadius: 16,
    },
    mapContainer: {
        // flex: 1,
        height: 180,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        // marginBottom: 8,
    },
    openOnMapButton: {
        backgroundColor: '#0096c7',
        paddingVertical: 12,
    },
    openOnMapLabel: {
        color: '#FFF'
    },
    ubsName: {
        fontSize: 18,
        fontWeight: "600",
    },
    noHealthUnit: {
        height: 240,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
    }
})