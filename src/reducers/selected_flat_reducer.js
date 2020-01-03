export default function(state, action) {
  // compute/return new state

  // if undefined, return a default state (empty array)
  if (state === undefined) {
    // no flat selected by default
    return null;
  }

  // handle actions
  switch (action.type) {
    case 'SELECT_FLAT':
      return action.payload;
    default:
      // return current state if action type is not 'SELECT_FLAT'
      return state;
  }
}
