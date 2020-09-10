// import {CREATE_USER} from '../constant/types';
// export const addUser = (data) => {
//     return dispatch => {
//         fetch('http://localhost/mycrudopp_php/insert.php',{
//             method:'POST',
//             body:JSON.stringify(data)
//         }).then((res)=>{ return res.json()})
//         .then((resdata)=>{
//             data['id']=resdata;
//             return dispatch({
//                 type: CREATE_USER,
//                 payload:data
//             })
//         })
//     }
// }
// import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../constant/types'

export const fetchUsers = (data) => {
  return dispatch => {
    dispatch(fetchUsersRequest())
      fetch('http://localhost/mycrudopp_php/insert.php',{
          method:'POST',
          body:JSON.stringify(data)
      })
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = users => {
  return {
    type: FETCH_USERS_REQUEST,
    payload: users
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}