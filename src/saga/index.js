import {all} from "redux-saga/effects"
import {authSaga, tokenWatcher} from "./auth";

export const rootSaga = function * () {
    yield all([
        authSaga()
    ])
}