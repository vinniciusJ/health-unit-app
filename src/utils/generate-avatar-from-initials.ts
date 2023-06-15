interface Params {
    firstName: string
    lastName: string
}

export const generateAvatarFromInitials = ({ firstName, lastName }: Params) => `${firstName[0]}${lastName[0]}`