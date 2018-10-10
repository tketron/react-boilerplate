import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_STRINGS } from './constants';
import { stringsLoaded, stringsLoadingError } from './actions';
import request from '../../utils/request';

function* getStrings() {
  const requestURL = `http://localhost:3000/strings`;
  try {
    const strings = yield call(request, requestURL);
    yield put(stringsLoaded(strings));
  } catch (e) {
    yield put(stringsLoadingError(e));
  }
}

// Root saga
export default function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield takeLatest(LOAD_STRINGS, getStrings);
}
