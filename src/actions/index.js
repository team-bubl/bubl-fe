import axios from 'axios';




//  TODO insert endpoints
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

//  TODO insert endpoints
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get('https://API-ENDPOINTS-HERE/api/data')
    .then(res => console.log(res))
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
    });
};