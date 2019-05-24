import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  USER_AUTHENTICATE_SUCCESS,
  USER_AUTHENTICATE_FAIL
} from "../constants/User";
import {
  RegisterUserApi,
  LoginUserApi,
  userSessionApi,
  logoutSessionUserApi
} from "../api/UserApi";

export const RegisterUser = user => async dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  const User = await RegisterUserApi(user);
  if (User) {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: User
    });
  } else {
    dispatch({
      type: REGISTER_FAIL,
      payload: new Error("Username already taken!")
    });
  }
};

export const LoginUser = user => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });

  const User = await LoginUserApi(user);
  if (User) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: User
    });
  } else {
    dispatch({
      type: LOGIN_FAIL,
      payload: new Error("Sorry! Invalid credentials")
    });
  }
};

export const LogoutUser = () => async dispatch => {
  await logoutSessionUserApi();
  dispatch({
    type: LOGOUT_SUCCESS,
    payload: {}
  });
};

export const userSession = () => async dispatch => {
  let User = await userSessionApi();
  if (User) {
    dispatch({
      type: USER_AUTHENTICATE_SUCCESS,
      payload: User
    });
  } else {
    dispatch({
      type: USER_AUTHENTICATE_FAIL,
      payload: {}
    });
  }
};
