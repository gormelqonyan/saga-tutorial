import {
  ADD_TOKEN,
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../ constant";
import { take, call, put } from "redux-saga/effects";
import axios from "axios";
import { urlPath } from "../utils/config";
import { history } from "../history";

const registerFetch = async (username, email, password) => {
  return await axios.post(`${urlPath}/auth/register`, {
    username,
    email,
    password,
  });
};

const loginFetch = async (email, password) => {
  return await axios.post(`${urlPath}/auth/login`, {
    email,
    password,
  });
};

const authication = function* (username, email, password, actionType) {
  try {
    const isTypeLogin = actionType === LOGIN;
    const authFetch = isTypeLogin ? loginFetch : registerFetch;
    const type = isTypeLogin ? LOGIN_SUCCESS : REGISTER_SUCCESS;
    const arg = isTypeLogin ? [email, password] : [username, email, password];
    const data = yield call(authFetch, ...arg);
    yield put({ type, payload: data.data.token });
    localStorage.setItem("token", data.data.token);
    yield history.push("/");
    return data.data.token;
  } catch (e) {
    yield put({ type: REGISTER_ERROR });
  }
};

const logout = function* () {
  localStorage.removeItem("token");
  yield put({ type: LOGOUT_SUCCESS });
};

export const tokenWatcher = function* () {
  const token = localStorage.getItem("token");
  if (token) {
    yield put({ type: ADD_TOKEN, payload: token });
  }
  return token;
};

export const authSaga = function* () {
  while (true) {
    const token = yield call(tokenWatcher);
    if (!token) {
      const action = yield take([REGISTER, LOGIN]);
      const { username, email, password } = action.payload;
      yield call(authication, username, email, password, action.type);
    } else {
      yield take([LOGOUT, REGISTER_ERROR]);
      yield call(logout);
    }
  }
};
