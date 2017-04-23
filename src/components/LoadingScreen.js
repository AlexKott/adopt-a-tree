import React from 'react';
import './loadingscreen.less';

class LoadingScreen extends React.Component {

  render() {
    return (
      <div className="wrapper loading-screen" id="loading">
        <h1>THIS IS A LOGO</h1>
        <div className="loading-bubble" />
      </div>
    );
  }
}

LoadingScreen.displayName = 'LoadingScreen';
LoadingScreen.propTypes = {};
LoadingScreen.defaultProps = {};

export default LoadingScreen;
