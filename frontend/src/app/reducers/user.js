import { combineReducers } from 'redux';

import facilitiesReducer from './user/facilities';
import unitsReducer from './user/units';
import alarmsReducer from './user/alarms';

const userReducer = combineReducers({
  facilities: facilitiesReducer,
  units: unitsReducer,
  alarms: alarmsReducer,
});

export default userReducer;
