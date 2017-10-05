export const SORT_BY_LIKES = 'SORT_BY_LIKES';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const LIKE_UP = 'LIKE_UP';
export const LIKE_DOWN = 'LIKE_DOWN';

export const sortMovieByLikes = (sortByLikes) => ({
    type: SORT_BY_LIKES,
    payload: sortByLikes
});

export const sortMovieByRating = (sortByRating) => ({
    type: SORT_BY_RATING,
    payload: sortByRating
});

export const search = (flagSearch) => ({
    type: SEARCH_MOVIE,
    payload: flagSearch
});

export const likeUp = (id) => ({
    type: LIKE_UP,
    payload: id
});

export const likeDown = (id) => ({
    type: LIKE_DOWN,
    payload: id
});

