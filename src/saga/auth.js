import {
    ADD_TOKEN,
    LOGIN,
    LOGIN_SUCCESS,
    LOGOUT, LOGOUT_SUCCESS,
    REGISTER,
    REGISTER_ERROR,
    REGISTER_SUCCESS
} from "../ constant";
import {take, call, put} from "redux-saga/effects";
import axios from "axios";
import {urlPath} from "../utils/config";

const registerFetch = async (login, password) => {
    return await axios.post(`${urlPath}/auth/register`, {
        login,
        password
    })
}

const loginFetch = async (login, password) => {
    return await axios.post(`${urlPath}/auth/login`, {
        login,
        password
    })
}

const authication = function * (login, password, actionType) {
    try {
        console.log(actionType)
        if (actionType === LOGIN) {
            const data = yield call(loginFetch, login, password);
            localStorage.setItem("token", data.data.token);
            yield put({type: LOGIN_SUCCESS, payload: data.data.token})
            return data.data.token
        } else {
            const data = yield call(registerFetch, login, password);
            localStorage.setItem("token", data.data.token);
            yield put({type: REGISTER_SUCCESS, payload: data.data.token})
            return data.data.token
        }

    } catch (e) {
        yield put({type: REGISTER_ERROR})
    }
}

const logout = function * () {
    localStorage.removeItem("token");
    yield put({type: LOGOUT_SUCCESS})
}

export const tokenWatcher = function * () {
    const token = localStorage.getItem("token")
    if (token) {
        yield put({type: ADD_TOKEN, payload: token})
    }
    return token
}

export const authSaga = function * () {
    while(true) {
        const token = yield call(tokenWatcher);
        if (!token) {
            const action = yield take([REGISTER, LOGIN]);
            const {email, password} = action.payload;
            yield call(authication, email, password, action.type)
        } else {
            yield take([LOGOUT, REGISTER_ERROR])
            yield call(logout)
        }
    }
}