import { UPDATE_MARKER } from '../actions';

export default function(state = null, action) {
  // compute/return new state

  // handle actions
  switch (action.type) {

    case UPDATE_MARKER:
      return action.payload;
    default:
      return state;
  }
}
