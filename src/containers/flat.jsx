import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';

class Flat extends Component {
  handleClick = () => {
    // REDUX action. can call bc of code on lines 37 to end
    this.props.selectFlat(this.props.flat)
    this.updateMarker(this.props.flat);
  }

  updateMarker = (flat) => {
    const { lng, lat } = flat;
    const { map, marker } = this.props;
    // remove old marker if exists
    if (marker != null) {
      marker.remove();
    }
    // add new marker and update state
    const newMarker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    this.props.updateMarker(newMarker);
    // fly to new marker
    map.flyTo({ center: [lng, lat] });
  }

  render() {
    const { flat } = this.props;

    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${flat.imageUrl})`
    };

    // add selected class to Flat if it is equal to selectedFlat in redux state
    let classes = "flat-card";
    if (flat === this.props.selectedFlat ) {
      classes += " selected";
    }

    return (
      <div className={classes} style={style} onClick={this.handleClick}>

        <div className="flat-card-content">

          <div className="flat-card-top">
            <p>{flat.price} {flat.priceCurrency}</p>
          </div>

          <div className="flat-card-bottom">
            <h3>{flat.name}</h3>
          </div>

        </div>
      </div>
    );
  }
}

import { selectFlat, updateMarker } from '../actions';

function mapDispatchToProps(dispatch) {
  // wire action to props of FlatList
  return bindActionCreators(
    { selectFlat, updateMarker },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return ({
    selectedFlat: reduxState.selectedFlat,
    map: reduxState.map,
    marker: reduxState.marker
  });
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
