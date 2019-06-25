import { axiosWithAuth } from '../utils/axiosWithAuth';



export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    //  TODO edit endpoints
    .post("/login", creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user })
      // In Login.js this function that calls this action creator
      // needs the following to return true so that it can history.push to a protected route
      return true;
    })
    .catch(err => console.log(err.response));
}

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    //  TODO edit endpoints
    .get('/data')
    .then(res => console.log(res))
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
    });
};