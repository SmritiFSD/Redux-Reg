import {
  USERS_REGISTER_REQUEST,
  USERS_REGISTER_SUCCESS,
  USERS_REGISTER_FAILURE,
  USERS_LOGIN_REQUEST,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE
} from "../constant/types";

//Register User//
export const fetchUsers = (data) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch("http://localhost/mycrudopp_php/insert.php", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        data["id"] = res;
        const users = data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: USERS_REGISTER_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: USERS_REGISTER_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: USERS_REGISTER_FAILURE,
    payload: error,
  };
};



//Login User//
export const loginUsers = (data) => {
  return (dispatch) => {
    dispatch(loginUsersRequest());
    fetch("http://localhost/mycrudopp_php/login.php", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        // data["id"] = res;
        const users = data;
        if (users.status === "success") {
          alert(users.message);
        } else {
          alert(users.message);
        }
        console.log(users);
        dispatch(loginUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(loginUsersFailure(error.message));
      });
  };
};

export const loginUsersRequest = () => {
  return {
    type: USERS_LOGIN_REQUEST,
  };
};

export const loginUsersSuccess = (users) => {
  return {
    type: USERS_LOGIN_SUCCESS,
    payload: users,
  };
};

export const loginUsersFailure = (error) => {
  return {
    type: USERS_LOGIN_FAILURE,
    payload: error,
  };
};
