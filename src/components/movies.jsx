import React from 'react';
import MovieList from './movieList.jsx';
import Filter from './filter';

const Movies =() => {
    return (
        <React.Fragment>
            <Filter/>
            <MovieList/>
        </React.Fragment>
    )
};


export default Movies;