import React, { Component } from 'react';
import { withStore } from './withStore';

class Timestamp extends Component {

  render() {
    return (
      <div suppressHydrationWarning={true}>
        {this.props.timestamp.toString()}
      </div>
    );
  }
}

const extraProps = (store) => {
  return {
    timestamp: store.getState().timestamp,
  };
};

export default withStore(extraProps)(Timestamp);
