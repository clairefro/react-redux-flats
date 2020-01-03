import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Flat extends Component {
  handleClick = () => {
    // REDUX action. can call bc of code on lines 37 to end
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const { flat, selected } = this.props;

    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${flat.imageUrl})`
    };

    let classes = "flat-card";

    if (this.props.flat === this.props.selectedFlat ) {
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

import { selectFlat } from '../actions';

function mapDispatchToProps(dispatch) {
  // wire action to props of FlatList
  return bindActionCreators(
    { selectFlat },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return ({
    selectedFlat: reduxState.selectedFlat
  });
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
