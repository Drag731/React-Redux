// const changeLikes = (state = movie, action) => {
//     switch (action.type) {
//         case 'CLICK_UP':
//         return [
//             ...state,
//             {
//               likes: action.likes,
//             }
//           ]
//         case 'Click_DOWN':
//           return [
//             ...state,
//             {
//               likes: action.likes,
//             }
//           ]
//         default:
//           return state
//     }
// }

// export default changeLikes;

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

export default counter;