import { FETCH_USER } from "./type";
import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/auth/current_user");
  // console.log("AAAAAA", response);
  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};
