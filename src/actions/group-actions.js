import * as types from './action-types';

// plain action creators
const request = () => {
  return {
    type: types.REQUEST_GROUPS
  }
};

const receive = (groups) => {
  return {
    type: types.RECEIVE_GROUPS,
    groups
  }
}

// this is a special async action creator
// using redux-thunk to return a function in an action creator
// allows us to call dispatch(load()) in a component or whereever
export const load = () => dispatch => {
  dispatch(request());
  return fetch('/api/groups/')
  .then(r => r.json())
  .then(data => dispatch(receive(data)));
};