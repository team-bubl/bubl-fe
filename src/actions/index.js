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

// TODO scrutinize this SIGNUP acton sequence
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const signup = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    //  TODO edit endpoints
    .post("/signup", user)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.user })
      // In Signup.js this function that calls this action creator
      // needs the following to return true so that it can history.push to a protected route
      return true;
    })
    .catch(err => console.log(err.response));
}

// // TODO Add_User action sequence
// export const ADD_USER_START = "ADD_USER_START";
// export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
// export const ADD_USER_FAILURE = "ADD_USER_FAILURE";
// export const addUser = user => dispatch => {
//   dispatch({ type: ADD_USER_START });
//   return axiosWithAuth()
//     .post("/addUser", user)
//     .then(res => {
//       localStorage.setItem('')
//     })
// }


export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    //  TODO edit endpoints
    .get('/data')
    .then(res => {
      dispatch({ tpye: FETCH_DATA_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
    });
};