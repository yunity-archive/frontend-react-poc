import * as types from '../actions/action-types';

// Reducers are pure functions, i.e. without side effects

export default (
  state = {
    isFetching: false,
    items: []
  }, 
  action
) => {
  switch (action.type) {
    case types.REQUEST_GROUPS:
      return {
        isFetching: true,
        items: []
      };
    case types.RECEIVE_GROUPS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.groups
      })
    default:
      return state;
  }
};