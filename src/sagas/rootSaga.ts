import { all, fork } from "redux-saga/effects";
import toDoSaga from "./toDoSaga";

export function* rootSaga() {
  yield all([fork(toDoSaga)]);
}
