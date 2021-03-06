// import flats from '../../data/flat_data';
export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';
export const SET_MAP = 'SET_MAP';
export const UPDATE_MARKER = 'UPDATE_MARKER';

export function setFlats() {
  const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';

  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return {
        type: SET_FLATS,
        payload: data
      };
    })
    .catch(err => console.log(err));

  // code when was using imported flats object data
  // return {
  //   type: 'SET_FLATS',
  //   payload: flats
  // };
}

export function selectFlat(flat) {
  return {
    type: SELECT_FLAT,
    payload: flat
  };
}

export function setMap(map) {
  return {
    type: SET_MAP,
    payload: map
  };
}

export function updateMarker(marker) {
  return {
    type: UPDATE_MARKER,
    payload: marker
  };
}
