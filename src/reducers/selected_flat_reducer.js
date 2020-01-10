import { SELECT_FLAT } from '../actions';

export default function(state = null, action) {
  // compute/return new state

  // handle actions
  switch (action.type) {
    case SELECT_FLAT:
      return action.payload;
    default:
      // return current state if action type is not 'SELECT_FLAT'
      return state;
  }
}
