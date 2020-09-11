import {
    USERS_REGISTER_REQUEST,
    USERS_REGISTER_SUCCESS,
    USERS_REGISTER_FAILURE,
  } from '../constant/types'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case USERS_REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
          // users: action.payload,
        }
      case USERS_REGISTER_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case USERS_REGISTER_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  export default userReducer;
