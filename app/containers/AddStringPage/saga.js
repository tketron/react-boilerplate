import { takeLatest, call, put, select } from 'redux-saga/effects';
import { ADD_STRING } from './constants';
import { addNewStringError, addNewStringSuccess } from './actions';
import { makeSelectNewString } from './selectors';
import request from '../../utils/request';

function* addString() {
  const newString = yield select(makeSelectNewString());
  const requestURL = 'http://localhost:3000/strings/add';
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({ string: newString }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  try {
    yield call(request, requestURL, requestOptions);
    yield put(addNewStringSuccess());
  } catch (e) {
    yield put(addNewStringError(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(ADD_STRING, addString);
}
