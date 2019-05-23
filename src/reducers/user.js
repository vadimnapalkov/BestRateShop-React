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
      state = action.payload;
      return state;

    case USER_AUTHENTICATE_FAIL:
      state = action.payload;
      return { ...state, error: "" };

    case LOGIN_REQUEST:
      return { ...state, errorLogin: "" };

    case LOGIN_SUCCESS:
      state = action.payload;
      return state;

    case LOGIN_FAIL:
      return {
        ...state,
        errorLogin: action.payload.message,
        errorRegister: ""
      };

    case REGISTER_REQUEST:
      return { ...state, errorRegister: "" };

    case REGISTER_SUCCESS:
      state = action.payload;
      return state;

    case REGISTER_FAIL:
      return {
        ...state,
        errorRegister: action.payload.message,
        errorLogin: ""
      };

    case LOGOUT_SUCCESS:
      state = action.payload;
      return state;

    default:
      return state;
  }
};
