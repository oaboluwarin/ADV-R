import React, { Component } from 'react';
import { object } from 'prop-types';
import { AppConsumer } from '../context';

export const withStore = (extraProps = () => ({})) => (WrappedComponent) =>
  class WithStoreComponent extends Component {
    static contextTypes = {
      store: object,
    }

    static displayName = `${WrappedComponent.name}Container`;

    render() {
      return (
        <AppConsumer>
          {({ store }) =>
            <WrappedComponent
              {...this.props}
              {...extraProps(store, this.props)}
              store={store} />}
        </AppConsumer>
      );
    }
  };
