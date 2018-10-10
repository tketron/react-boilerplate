import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_STRINGS } from './constants';
import { stringsLoaded, stringsLoadingError } from './actions';

export function* getStrings() {
  try {
    yield put(stringsLoaded());
  } catch (e) {
    yield put(stringsLoadingError(e));
  }
}

// Root saga
export default function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(LOAD_STRINGS, getStrings);
}
