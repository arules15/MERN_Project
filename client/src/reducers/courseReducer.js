import {
  GET_DEPARTMENTS,
  GET_COURSES,
  GET_COURSE,
  SET_DEPARTMENT,
  SET_COURSE,
  GET_SEARCH,
  SET_SEARCH
} from "../actions/types";

const initialState = {
  departments: null,
  department: null,
  courses: null,
  description: null,
  course: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload
      };
    case SET_DEPARTMENT:
      return {
        ...state,
        department: action.payload
      };
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload
      };
    case SET_COURSE:
      return {
        ...state,
        course: action.payload
      };
    case GET_COURSE:
      return {
        ...state,
        description: action.payload
      };
    case GET_SEARCH:
      return {
        ...state,
        courses: action.payload
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
}
