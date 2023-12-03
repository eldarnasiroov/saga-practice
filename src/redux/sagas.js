import { call, put, takeEvery } from "redux-saga/effects";
import { API } from "../api";
import { getPostsFailed, getPostsSuccess } from "./actions";
import { GET_POSTS } from "./actionTypes";

function* getPostsSaga() {
  try {
    const data = yield call(API.getPosts);
    yield put(getPostsSuccess(data));
  } catch (err) {
    yield put(getPostsFailed(err));
  }
}

export function* watchGetPosts() {
  yield takeEvery(GET_POSTS, getPostsSaga);
}
