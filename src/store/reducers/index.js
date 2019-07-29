import movies from './movies';
import pageNumber from './page';
import genre from './genre';


import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    movies,
    pageNumber,
    selectedGenre: genre
});
export default rootReducer;