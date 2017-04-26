import { fork } from 'redux-saga/effects';

import { watchAuth } from 'features/auth/state/sagas';

import { watchFacilities } from 'features/facilities/state/sagas';
import { watchUnits } from 'features/units/state/sagas';
import { watchUnit } from 'features/unit/state/sagas';

export default function* rootSaga() {
  yield fork(watchAuth);
  yield fork(watchUser);
}

function* watchUser() {
  yield fork(watchFacilities);
  yield fork(watchUnits);
  yield fork(watchUnit);
}
