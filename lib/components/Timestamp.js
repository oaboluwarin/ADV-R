import React, { PureComponent } from 'react';
import { withStore } from './withStore';

class Timestamp extends PureComponent {
  static showTime = (timestamp) =>
    timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  render() {
    return (
      <div suppressHydrationWarning={true}>
        {this.props.timestampDisplay}
      </div>
    );
  }
}

const extraProps = (store) => {
  return {
    timestampDisplay: Timestamp.showTime(store.getState().timestamp),
  };
};

export default withStore(extraProps)(Timestamp);
