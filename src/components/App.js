import React from 'react';

import Router from '../containers/Router';

import './app.css';
import FakeAlert from './FakeAlert.js';

class AppComponent extends React.Component {

  render() {
    return (
      <Router />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
