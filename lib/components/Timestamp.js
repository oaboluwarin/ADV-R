import React, { Component } from 'react';
import { string } from 'prop-types';

class Timestamp extends Component {
  static propTypes = {
    timestamp: string,
  }

  render() {
    return (
      <div suppressHydrationWarning={true}>
        {this.props.timestamp}
      </div>
    );
  }
}

export default Timestamp;
