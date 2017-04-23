import React from 'react';
import './loadingscreen.less';

class LoadingScreen extends React.Component {

  render() {
    return (
      <div className="wrapper loading-screen" id="loading">
        <div className="loading-logo" style={{ backgroundImage: 'url("images/logo-tree.png")'}} />
        <div className="loading-bubble" />
      </div>
    );
  }
}

LoadingScreen.displayName = 'LoadingScreen';
LoadingScreen.propTypes = {};
LoadingScreen.defaultProps = {};

export default LoadingScreen;
