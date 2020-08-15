import {
  ADD_TOKEN,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../ constant";

const initialState = {
  token: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case ADD_TOKEN:
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case REGISTER_ERROR:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
};

export default auth;
