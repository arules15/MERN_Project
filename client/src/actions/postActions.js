import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST
} from "./types";

//Add Post
export const addPost = postData => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
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

//Add Post Anonymously
export const addPostAnon = postData => dispatch => {
  axios
    .post("/api/posts/anon", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};

//Get Posts
export const getPosts = course => dispatch => {
  dispatch(setPostLoading);
  axios
    .get(`/api/posts/review/${course}`)
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

//Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Add Like
export const addLike = (id, course) => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => dispatch(getPosts(course)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Remove Like
export const removeLike = (id, course) => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts(course)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set loading State
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
