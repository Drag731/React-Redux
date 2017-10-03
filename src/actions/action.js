

export const click = (currentMovie) => {
    console.log('hi', currentMovie.id);
    return {
        type: clickUp,
        payload: currentMovie
    };
};