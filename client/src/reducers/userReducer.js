import { CLEAR_USER, FETCH_USER } from "./types";

export default (state = false, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case CLEAR_USER:
      return false;
    default:
      return state;
  }
};



