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

const initialState = {};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTHENTICATE_SUCCESS:
      return action.payload;

    case USER_AUTHENTICATE_FAIL:
      return { ...state, error: action.payload.message };

    case LOGIN_REQUEST:
      return { ...state, errorLogin: "" };

    case LOGIN_SUCCESS:
      return action.payload;

    case LOGIN_FAIL:
      return {
        ...state,
        errorLogin: action.payload.message,
        errorRegister: ""
      };

    case REGISTER_REQUEST:
      return { ...state, errorRegister: "" };

    case REGISTER_SUCCESS:
      return action.payload;

    case REGISTER_FAIL:
      return {
        ...state,
        errorRegister: action.payload.message,
        errorLogin: ""
      };

    case LOGOUT_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
