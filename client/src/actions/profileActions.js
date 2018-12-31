import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER,
  GET_PROFILES
} from "./types";

//Get Current profile
export const getCurrentProfile = () => dispatch => {
  //call the profile loading function, in our reducer this will cause the profile loading circle to
  //appear until the type has changed to GET_PROFILE , since the type of setProfileLoading is PROFILE_LOADING
  //(refer to profilereducer to see what affect this has)
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        //THIS IS empty because , user may exist, but does not have a profile
        type: GET_PROFILE,
        payload: {}
      })
    );
};
//Create Profile, (history used for redirect)
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Profile loading, displays the little profile loading circle
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

//Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

//Delete Account & profile, this will call SET_CURRENT_USER, which is in the auth reducer, and set the payload to be an empty object
//thereby setting isAuthenticated to be false
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure? This cannot be undone!")) {
    axios
      .delete("/api/profile/deleteuser")
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

//Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/all")
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

//Get Profile by Handle
export const getProfileByHandle = handle => dispatch => {
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        //THIS IS empty because , user may exist, but does not have a profile
        type: GET_PROFILE,
        payload: null
      })
    );
};
