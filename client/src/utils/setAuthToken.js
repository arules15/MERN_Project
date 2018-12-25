import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //if a token exists, then make the token the auth header for every request made (Apply to every request)
    axios.defaults.headers.common["Authorization"] = token; //set header value of type Authorization to token
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"]; //if there is no token, then delete the authorization error (no token means session expired or user mustve logged out)
  }
};

export default setAuthToken;
