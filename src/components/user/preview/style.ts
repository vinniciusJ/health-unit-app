import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
    },
    avatar: {
        backgroundColor: '#ccc',
        padding: 18,
        borderRadius: 64,
    },
    initials: {
        fontSize: 24,
    },
    user: {
        display: 'flex',
        gap: 8,
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    editProfile: {
        justifyContent: 'flex-start',
        gap: 4,
    },
    editProfileText: {
        color: '#6c757d',
        fontSize: 14,
    }
})