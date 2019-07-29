const initialState = {
    movies: [ ]
};

const movies = (state = initialState, {type, value}) => {
    switch(type) { 
        case "LOAD_MOVIES":
            return [...value];
        case "DELETE_MOVIE":
        let movies = [...state];
            movies = movies.filter(m => m._id !== value); 
            return movies;
        case "TOGGLE_LIKE":
        let movies1 = [...state];
            movies1 = movies1.map(m => {
                if (m._id === value) {
                    m.isLiked = !m.isLiked;
                }
                return m;
            });
            return movies1;

        default: 
        return state;
    }
}

export default movies;