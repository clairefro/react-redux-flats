import React, { Component } from 'react';

import mapboxgl from 'mapbox-gl';

import FlatList from '../containers/flat_list';
import Map from '../containers/map';

// import flats from '../../data/flat_data';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhaXJlZnJvZnJvIiwiYSI6ImNrMmc3YzdwdjBzOXEzaG9kY3hmdWJmbHgifQ.hvbyrZfZx7MxixCqThUrlA';

class App extends Component {
  render() {
    return (
      <div className="row">
        <FlatList />
        <Map />
      </div>
    );
  }
}

export default App;
