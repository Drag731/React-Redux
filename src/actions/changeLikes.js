function changeLikes (state = 0, action) {
    switch (action.type) {
        case "LIKE_UP":
            return state + 1;
            break;
        default:
            return state;
    }
}

export default changeLikes;