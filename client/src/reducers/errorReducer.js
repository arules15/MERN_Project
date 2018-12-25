import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    //if the dispatch calls for a GET_Err
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
