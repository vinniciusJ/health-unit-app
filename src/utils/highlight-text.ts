export const highlightText = (search: string, text: string) => {
    const regex = new RegExp(search, 'gi')
    const parts = text.split(regex)

    
}