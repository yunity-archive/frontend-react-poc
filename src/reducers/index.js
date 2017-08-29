import groups from './group-reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  groups  // access it from a component as state.groups
});

export default rootReducer;