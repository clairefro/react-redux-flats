import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhaXJlZnJvZnJvIiwiYSI6ImNrMmc3YzdwdjBzOXEzaG9kY3hmdWJmbHgifQ.hvbyrZfZx7MxixCqThUrlA';

class Map extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    // const { lat, lng } = this.props.selectedFlat;
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v9',
      // default center to paris
      center: [2.3522, 48.8566],
      zoom: 12
    });
    // add map to Redux state
    this.props.setMap(map);
    // const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    // update marker to Redux state
    // this.props.updateMarker(marker);
  }

  render() {
    return (
      <div className="col-sm-5 map-container" id="map-container">
      </div>
    )
  }
}

import { setMap, updateMarker } from '../actions';

function mapDispatchToProps(dispatch) {
  // wire actions to props of Map
  return bindActionCreators(
    { setMap, updateMarker },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return ({
    map: reduxState.map,
    marker: reduxState.marker
  });
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Map);
