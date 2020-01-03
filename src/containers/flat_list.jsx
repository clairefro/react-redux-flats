import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions/index';

import Flat from './flat';

class FlatList extends Component {
  componentWillMount() {
    // dispatch an action to udpate flats in Redux state tree
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-6">
        {this.props.flats.map((flat, index) => {
          return (
             <Flat
                flat={flat}
                key={flat.id}
                index={index}
                updateSelectedFlat={this.props.updateSelectedFlat}
              />
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return ({
    flats: reduxState.flats
  });
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
