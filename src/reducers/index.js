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
  SIGNUP_FAILURE,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_BUBLS_START,
  FETCH_BUBLS_SUCCESS,
  FETCH_BUBLS_FAILURE,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_BUBL_START,
  ADD_BUBL_SUCCESS,
  ADD_BUBL_FAILURE,
  DELETE_BUBL_START,
  DELETE_BUBL_SUCCESS,
  DELETE_BUBL_FAILURE
} from '../actions';


// TODO remember to add reducer 'states' here
const initialState = {
  error: '',
  fetchingSchool: false,
  loggingIn: false,
  signingUp: false,
  bubls: [],
  topic: '',
  schoolData: [],
  addingBubl: false,
  deletingBubl: false,
  bublId: ''
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
      console.log("LOGIN_SUCCESS action.payload:", action.payload)
      return {
        ...state,
        loggingIn: false,
        error: '',
        username: ''
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
    case FETCH_USERS_START:
      return {
        ...state,
        fetchingUser: true,
        error: ''
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        user: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchingUser: false,
        error: action.payload
      }
    case FETCH_BUBLS_START:
      return {
        ...state,
        fetchingBubls: true,
        error: ''
      }
    case FETCH_BUBLS_SUCCESS:
      return {
        ...state,
        fetchingBubls: false,
        bubls: action.payload,
        error: ''
      }
    case FETCH_BUBLS_FAILURE:
      return {
        ...state,
        fetchingBubls: false,
        error: action.payload
      }
    case FETCH_POSTS_START:
      return {
        ...state,
        fetchingPosts: true,
        error: ''
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetchingPosts: false,
        postsData: action.payload,
        error: ''
      }
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        error: action.payload
      }
    case FETCH_COMMENTS_START:
      return {
        ...state,
        fetchingComments: true,
        error: ''
      }
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        fetchingComments: false,
        comments: action.payload,
        error: ''
      }
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        fetchingComments: false,
        error: action.payload
      }
    case ADD_BUBL_START:
      return {
        ...state,
        addingBubl: true,
        error: ''
      }
    case ADD_BUBL_SUCCESS:
      return {
        ...state,
        addingBubl: false,
        error: '',
        topic: action.payload
      }
    case ADD_BUBL_FAILURE:
      return {
        ...state,
        addingBubl: false,
        error: action.payload
      }
    case DELETE_BUBL_START:
      return {
        ...state,
        deletingBubl: true,
        error: ''
      }
    case DELETE_BUBL_SUCCESS:
      return {
        ...state,
        deletingBubl: false,
        bublId: '',
        error: ''
      }
    case DELETE_BUBL_FAILURE:
      return {
        ...state,
        deletingBubl: false,
        error: ''
      }
    default:
      return state;
  }
}

export default reducer;