export default function(state, action) {
  // compute/return new state

  // if undefined, return a default state (empty array)
  if (state === undefined) {
    return []
  }

  // handle actions
  switch (action.type) {

    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
}
