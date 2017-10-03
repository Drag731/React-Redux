import { combineReducers } from 'redux';
import MoviesReducer from './Features/MainPage/MainPageReducer';


export default combineReducers({
    movies: MoviesReducer,
});