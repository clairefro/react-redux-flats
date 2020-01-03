export default function(state, action) {
  // compute/return new state

  if (state === undefined) {
    return null;
  }

  // handle actions
  switch (action.type) {

    case 'SET_MAP':
      return action.payload;
    default:
      return state;
  }
}
