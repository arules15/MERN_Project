import axios from "axios";

import {
  GET_DEPARTMENTS,
  GET_COURSES,
  GET_COURSE,
  GET_ERRORS,
  SET_DEPARTMENT,
  SET_COURSE
} from "./types";

export const getDepartments = () => dispatch => {
  axios.get("/api/courses/").then(res =>
    dispatch({
      type: GET_DEPARTMENTS,
      payload: res.data
    })
  );
};

export const setDepartments = department => dispatch => {
  dispatch({
    type: SET_DEPARTMENT,
    payload: department
  });
};

export const setCourse = course => dispatch => {
  dispatch({
    type: SET_COURSE,
    payload: course
  });
};

export const getCourses = department => dispatch => {
  axios
    .get(`/api/courses/course/${department}`)
    .then(res =>
      dispatch({
        type: GET_COURSES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getCourse = course => dispatch => {
  axios
    .get(`/api/courses/courses/${course}`)
    .then(res =>
      dispatch({
        type: GET_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
