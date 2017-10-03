export const CHANGE_COLOR = 'CHANGE_COLOR';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const SORT_MOVIE1 = 'SORT_MOVIE1';
export const SORT_MOVIE2 = 'SORT_MOVIE2';
export const SORT_BY_RATING1 = 'SORT_BY_RATING1';
export const SORT_BY_RATING2 = 'SORT_BY_RATING2';
export const LIKE_UP = 'LIKE_UP';

export const changeColor = color => ({
    type: CHANGE_COLOR,
    payload: color === 'red' ? 'blue' : 'red'
});

export const sortMovie = (sort) => ({
    type: sort === 'on' ? SORT_MOVIE1 : SORT_MOVIE2
});

export const sortMovieByRating = (sortByRating) => ({
    type: sortByRating === 'on' ? SORT_BY_RATING1 : SORT_BY_RATING2
});

// export const selectMovie = id => ({
//     type: SELECT_MOVIE,
//     payload: id
// });

