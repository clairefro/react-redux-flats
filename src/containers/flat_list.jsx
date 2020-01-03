import React, { Component } from 'react';

import Flat from '../components/flat';

class FlatList extends Component {
  componentWillMount() {
    // dispatch an action to udpate flats in Redux state tree

  }

  render() {
    return (
      <div className="flat-list col-sm-6">
        {this.props.flats.map((flat, index) => {
          return (
             <Flat
                flat={flat}
                key={flat.id}
                selected={flat.id === this.props.selectedFlat.id}
                index={index}
                updateSelectedFlat={this.props.updateSelectedFlat}
              />
          );
        })}
      </div>
    );
  }
}

export default FlatList;
