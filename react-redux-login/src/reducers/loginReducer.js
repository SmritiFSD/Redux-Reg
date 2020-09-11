import {
    USERS_LOGIN_REQUEST,
    USERS_LOGIN_SUCCESS,
    USERS_LOGIN_FAILURE,
  } from '../constant/types'

let users = JSON.parse(localStorage.getItem('Login user'));
  const initialState = users ? { loggedIn: true, users } :
  {
    loading: false,
    users: [],
    error: ''
  }
export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loggingIn: true,
      };
    case USERS_LOGIN_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        users: action.payload,
        error: ''
      };
    case USERS_LOGIN_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
   
    default:
      return state
  }
}

export default loginReducer;