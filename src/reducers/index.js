import {
  LOGIN_START,
  LOGIN_SUCCESS,
  // TODO write out failure
  // LOGIN_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ''
      }
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true
      }
    default:
      return state;
  }
}

export default reducer;