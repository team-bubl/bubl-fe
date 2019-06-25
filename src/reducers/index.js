import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

const initialState = {
  error: '',
  fetchingData: false,
  loggingData: false,
  someData: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true
      }
    default:
      return state;
  }
}

export default reducer;