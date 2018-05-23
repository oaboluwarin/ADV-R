import React, { Component } from 'react';
import { object } from 'prop-types';
import { AppConsumer } from '../context';

export const withStore = (extraProps = () => ({})) => (WrappedComponent) =>
  class WithStoreComponent extends Component {
    static contextTypes = {
      store: object,
    }

    static displayName = `${WrappedComponent.name}Container`;

    usedState = (theStore = (() => ({}))) => {
      return extraProps(theStore, this.props);
    }

    render() {
      return (
        <AppConsumer>
          {({ store }) =>
            <WrappedComponent
              {...this.props}
              {...this.usedState(store)}
              store={store} />}
        </AppConsumer>
      );
    }
  };
