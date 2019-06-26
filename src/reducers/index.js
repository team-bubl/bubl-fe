import {
  LOGIN_START,
  LOGIN_SUCCESS,
  // TODO write out failures
  // LOGIN_FAILURE,
  FETCH_SCHOOLS_START,
  FETCH_SCHOOLS_SUCCESS,
  FETCH_SCHOOLS_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actions';


// TODO remember to add reducer 'states' here
const initialState = {
  error: '',
  fetchingSchool: false,
  loggingIn: false,
  signingUp: false,
  schoolData: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ''
      };
    case FETCH_SCHOOLS_START:
      return {
        ...state,
        error: '',
        fetchingSchool: true
      };
    case FETCH_SCHOOLS_SUCCESS:
      return {
        ...state,
        fetchingSchool: false,
        schoolData: action.payload
        // .filter(add any filters here)
      };
    case FETCH_SCHOOLS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSchool: false
      };
    case SIGNUP_START:
      return {
        ...state,
        error: '',
        signingUp: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        error: ''
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;