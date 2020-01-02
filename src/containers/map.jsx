// import React, { Component } from 'react';
//
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhaXJlZnJvZnJvIiwiYSI6ImNrMmc3YzdwdjBzOXEzaG9kY3hmdWJmbHgifQ.hvbyrZfZx7MxixCqThUrlA';
//
// class Map extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       selectedFlat: this.props.selectedFlat,
//       map: null,
//       marker: null
//     };
//   }
//
//   componentDidMount() {
//     this.renderMap();
//   }
//
//   renderMap = () => {
//     const { lat, lng } = this.state.selectedFlat;
//     const map = new mapboxgl.Map({
//       container: 'map-container',
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: [lng, lat],
//       zoom: 16
//     });
//     // add map to App state
//     this.setState({ map });
//     const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
//     // add marker to App state
//     this.setState({ marker });
//   }
//
//   render() {
//     <div className="col-sm-5" id="map-container">
//     </div>
//   }
// }
//
// export default Map;
