// import { FETCH_USER } from "../ReduxActions/type";

// export function authReducers(state = false, action) {
//   switch (action.type) {
//     case FETCH_USER:
//       return action.payload;
//     default:
//       return state;
//   }
// }
import { FETCH_USER } from "../ReduxActions/type";

export function authReducers(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
