import { SEARCH_MOVIE, SORT_BY_LIKES, SORT_BY_RATING, LIKE_UP, LIKE_DOWN } from './MainPageActions';
import movies from '../../components/data.js';

const initialState = {
    movies: movies,
    initialMovies: movies,
    sortByLikes: 'on',
    sortByRating: 'on',
    flagSearch: '',
    flagLike: 0
};

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SORT_BY_LIKES: {
            return {
                ...state,
                movies: state.movies.sort(function(a,b) {
                    if (action.payload === 'on') {
                         return  a.likes - b.likes; 
                    } else {
                        return  a.likes + b.likes; 
                    }
                }),
                sortByLikes: action.payload === 'on' ? 'off' : 'on',
            };
        }

        case SORT_BY_RATING: {
            return {
                ...state,
                movies: state.movies.sort(function(a,b) {
                    if (action.payload === 'on') {
                        return  a.stars - b.stars; 
                    } else {
                        return  a.stars + b.stars;
                    }
                }),
                sortByRating: action.payload === 'on' ? 'off' : 'on',
            };
        }

        case SEARCH_MOVIE: {
            return {
                ...state,
                movies: movies.filter(function(el) {
                    const regExp = new RegExp(action.payload, 'i')
                    return ~el.title.search(regExp);
                }),
                flagSearch: action.payload
            };
        }

        case LIKE_UP: {
            return {
                ...state,
                initialMovies: movies.map(function(el) {
                    if (el.id === action.payload) {
                        el.likes = el.likes + 1;
                    }
                    return el;
                }),
                flagLike: state.flagLike + 1
            };
        }

        case LIKE_DOWN: {
            return {
                ...state,
                initialMovies: movies.map(function(el) {
                    if (el.id === action.payload) {
                        el.likes = el.likes - 1;
                    }
                    return el;
                }),
                flagLike: state.flagLike - 1
            };
        }

        default: {
            return state;
        }
    }
};

export const getMovieByLikes = state => state.movies.sortByLikes;
export const getFlagSearch = state => state.movies.flagSearch;
export const getMovieByRating = state => state.movies.sortByRating;
export const getMovies = state => state.movies.movies;
export const getInitialMovies = state => state.movies.initialMovies;
export const getLike = state => state.movies.flagLike;

// export const getSelectedMovie = state => state.movies.data.find((movie) => {
//     return movie.id === state.movies.selectedMovieId;
// });

export default MoviesReducer;