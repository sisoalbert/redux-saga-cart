// src/redux/sagas.js
import { takeEvery, put, delay } from "redux-saga/effects";
import { addItem, removeItem } from "./cartSlice";

function* addItemAsync(action) {
  yield delay(500); // Simulating async operation
  yield put(addItem(action.payload));
}

function* removeItemAsync(action) {
  yield delay(500); // Simulating async operation
  yield put(removeItem(action.payload));
}

export function* watchCartActions() {
  yield takeEvery("cart/addItemAsync", addItemAsync);
  yield takeEvery("cart/removeItemAsync", removeItemAsync);
}
