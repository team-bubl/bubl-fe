import axios from 'axios';


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post("https://API-ENDPOINTS-HERE/api/login", creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user })
      // In Login.js this function that calls this action creator
      // needs the following to return true so that it can history.push to a protected route
      return true;
    })
    .catch(err => console.log(err.response));
}