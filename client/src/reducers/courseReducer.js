import { GET_DEPARTMENTS, GET_COURSES, GET_COURSE } from "../actions/types";

const initialState = {
  department: null,
  course: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return {
        ...state,
        department: action.payload
      };
    case GET_COURSES:
      return {
        ...state,
        department: action.payload
      };
    case GET_COURSE:
      return {
        course: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
