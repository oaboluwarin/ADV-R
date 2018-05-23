import React, { Component } from 'react';
import { withStore } from './withStore';

class Timestamp extends Component {
  showTime = (timestamp) =>
    timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  shouldComponentUpdate(nextProps) {
    return (
      this.showTime(this.props.timestamp) !==
      this.showTime(nextProps.timestamp)
    );
  }

  render() {
    return (
      <div suppressHydrationWarning={true}>
        {this.showTime(this.props.timestamp)}
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
