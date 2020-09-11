// import {
//     CREATE_USER
// }from "../constant/types";

// const userReducers = (state=[],action) => {

//     // console.log(action)
//     // console.log(state)
//     switch(action.type){
        
//         case CREATE_USER:
//             return state.concat(action.payload);

//         default:
//             return state

//     }
// }
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
  } from '../constant/types'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  const userReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          loading: true,
          // users: action.payload,
        }
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default userReducers;
// export default userReducers;