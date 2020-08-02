import { FETCH_USER } from "../ReduxActions/type";

export function authReducers(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
