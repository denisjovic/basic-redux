import CounterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  CounterReducer,
  loggedReducer,
});

export default allReducers;
