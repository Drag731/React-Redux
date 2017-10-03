import { CHANGE_COLOR, SELECT_MOVIE, SORT_MOVIE1, SORT_MOVIE2, SORT_BY_RATING1, SORT_BY_RATING2 } from './MainPageActions';
import movies from '../../components/data.js';

const initialState = {
    movies: movies,
    color: 'green',
    sort: 'on',
    sortByRating: 'on',
    selectedMovieId: null
};

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_COLOR: {
            return {
                ...state,
                color: action.payload,
            };
        }

        case SELECT_MOVIE: {
            return {
                ...state,
                selectedMovieId: action.payload,
            };
        }

        case SORT_MOVIE1: {
            return {
                ...state,
                movies: movies.sort(function(a,b) {
                   return  a.likes - b.likes; 
                }),
                sort: 'off',
            };
        }

        case SORT_MOVIE2: {
            return {
                ...state,
                movies: movies.sort(function(a,b) {
                   return  a.likes + b.likes; 
                }),
                sort: 'on',
            };
        }

        case SORT_BY_RATING1: {
            return {
                ...state,
                movies: movies.sort(function(a,b) {
                   return  a.stars - b.stars; 
                }),
                sortByRating: 'off',
            };
        }

        case SORT_BY_RATING2: {
            return {
                ...state,
                movies: movies.sort(function(a,b) {
                   return  a.stars + b.stars; 
                }),
                sortByRating: 'on',
            };
        }

        default: {
            return state;
        }
    }
};

// export const getMovies = state => state.movies.data;
export const getColor = state => state.movies.color;
export const getMov = state => state.movies.sort;
export const getMovieByRating = state => state.movies.sortByRating;

// export const getSelectedMovie = state => state.movies.data.find((movie) => {
//     return movie.id === state.movies.selectedMovieId;
// });

export default MoviesReducer;