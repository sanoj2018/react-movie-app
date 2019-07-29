

const genre = (state='All Genre', {type, value}) => {
    switch(type) {
        case 'GENRE_CHANGED':
            return value;
        default:
            return state;
    }
}
export default genre;