import { SET_MAP } from '../actions';

export default function(state = null, action) {
  // compute/return new state

  // handle actions
  switch (action.type) {
    case SET_MAP:
      return action.payload;
    default:
      return state;
  }
}
