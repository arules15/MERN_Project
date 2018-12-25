import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//if we were in a react componenet, we can simpy do
//this.props.history.push('/dashboard')
//for redirecting, but since we are in an action we can't do this

//Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Save to Local Storage, the res.data that we get back from this request will contain a token object, or if no login it will be empty
      const { token } = res.data;
      // Set token in localStorage (only stores strings), if it was json, we would need to convert to a string, then store, but since the
      //token is a string, we can store directly, also this is so, we can always retrieve the token from localStorage
      //when we reload and set the auth header to it
      localStorage.setItem("jwtToken", token);
      //Set token to auth header, setAuthToken is a helpful function we create to let us do this in ../utils/setAuthToken
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user, function that we created called setCurrentUser will help us do this, need to dispatch to it
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
//now that its dispatched, need to catch it in the AuthReducer

//Log User Out

export const logoutUser = () => dispatch => {
  //Remove token from localStorage
  localStorage.removeItem("jwtToken");
  //Remove auth header from future requests by setting setAuthToken to be false, this will delete the token from the authorization header
  setAuthToken(false);
  //Set current user to {} (empty object) which by default, sets isAuthenticated to false (since  isAuthenticated= !isEmpty(action.payload),
  // and action.payload would be false)
  dispatch(setCurrentUser({}));
  /*this whole process essentialy sets it back to the intialstate*/
};
