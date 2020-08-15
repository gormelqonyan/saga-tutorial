import { all } from "redux-saga/effects";
import { authSaga } from "./auth";

export const rootSaga = function* () {
  yield all([authSaga()]);
};
