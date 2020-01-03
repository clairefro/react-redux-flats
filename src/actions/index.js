import flats from '../../data/flat_data';

export function setFlats() {
  // TODO: API call. for now we are using simulated // DEBUG:
  return {
    type: 'SET_FLATS',
    payload: flats
  };
}

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  };
}
