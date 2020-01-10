import { SET_FLATS } from '../actions';

export default function(state = [], action) {
  // compute/return new state

  // handle actions
  switch (action.type) {

    case SET_FLATS:
      return action.payload;
    default:
      return state;
  }
}
