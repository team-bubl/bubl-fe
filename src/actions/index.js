import { axiosWithAuth } from '../utils/axiosWithAuth';



export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/auth/login", creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      // In Login.js this function that calls this action creator
      // needs the following to return true so that it can history.push to a protected route
      return true;
    })
    .catch(err => console.log(err.response));
}

// TODO Get Schools
export const FETCH_SCHOOLS_START = 'FETCH_SCHOOLS_START';
export const FETCH_SCHOOLS_SUCCESS = 'FETCH_SCHOOLS_SUCCESS';
export const FETCH_SCHOOLS_FAILURE = 'FETCH_SCHOOLS_FAILURE';
export const getSchools = () => dispatch => {
  dispatch({ type: FETCH_SCHOOLS_START });
  axiosWithAuth()
    //  TODO edit endpoints
    .get('/schools')
    .then(res => {
      // * res.data Brings back an array of objects with `audit_id` and `school` as properties
      dispatch({ type: FETCH_SCHOOLS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SCHOOLS_FAILURE, payload: err.response.data.error });
    });
};

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const signup = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    //  TODO edit endpoints
    .post("/auth/register", user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.user })
      // In Signup.js this function that calls this action creator
      // needs the following to return true so that it can history.push to a protected route
      return true;
    })
    .catch(err => console.log(err.response));
}

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axiosWithAuth()
    .get('/users')
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
      console.log("FETCH_USERS res.data:", res.data);
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAILURE, payload: err.response });
      console.log("FETCH_USERS err.respone:", err.response);
    });
};


export const FETCH_BUBLS_START = 'FETCH_BUBLS_START';
export const FETCH_BUBLS_SUCCESS = 'FETCH_BUBLS_SUCCESS';
export const FETCH_BUBLS_FAILURE = 'FETCH_BUBLS_FAILURE';
export const getBubls = () => dispatch => {
  dispatch({ type: FETCH_BUBLS_START });
  return axiosWithAuth()
    .get('/bubls/')
    .then(res => {
      dispatch({ type: FETCH_BUBLS_SUCCESS, payload: res.data });
      console.log("FETCH_BUBLS res.data:", res.data);
    })
    .catch(err => {
      dispatch({ type: FETCH_BUBLS_FAILURE, payload: err.response });
      console.log("FETCH_BUBLS err.respone:", err.response);
    })
}


export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const getPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS_START });
  axiosWithAuth()
    .get('/posts')
    .then(res => {
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data });
      console.log("FETCH_POSTS res.data:", res.data);
    })
    .catch(err => {
      dispatch({ type: FETCH_POSTS_FAILURE, payload: err.response });
      console.log("FETCH_POSTS err.respone:", err.response);
    })
}

export const FETCH_COMMENTS_START = 'FETCH_COMMENTS_START';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const getComments = () => dispatch => {
  dispatch({ type: FETCH_COMMENTS_START });
  axiosWithAuth()
    .get('/comments')
    .then(res => {
      dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: res.data });
      console.log("FETCH_COMMENTS res.data:", res.data);
    })
    .catch(err => {
      dispatch({ type: FETCH_COMMENTS_FAILURE, payload: err.response });
      console.log("FETCH_COMMENTS err.respone:", err.response);
    })
}

export const ADD_BUBL_START = 'ADD_BUBL_START';
export const ADD_BUBL_SUCCESS = 'ADD_BUBL_SUCCESS';
export const ADD_BUBL_FAILURE = 'ADD_BUBL_FAILURE';
export const addBubl = newBubl => dispatch => {
  dispatch({ type: ADD_BUBL_START });
  axiosWithAuth()
    .post('/bubls/', newBubl)
    .then(res => {
      console.log("ADD_BUBL action res.data:", res.data);
      dispatch({ type: ADD_BUBL_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_BUBL_FAILURE, payload: err.response });
    })
}