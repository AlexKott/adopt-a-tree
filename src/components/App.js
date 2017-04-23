import React from 'react';

import Router from '../containers/Router';
import config from 'config';
import './app.css';

class AppComponent extends React.Component {

  componentDidMount() {
    if (config.appEnv === 'dist') {
      window.addEventListener('click', goFullScreen);
    }

    function goFullScreen() {
      const doc = window.document;
      const docEl = doc.documentElement;

      const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

      requestFullScreen.call(docEl);
      window.removeEventListener('click', goFullScreen);
    }
  }

  render() {
    return (
      <Router />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
