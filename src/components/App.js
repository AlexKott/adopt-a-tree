import React from 'react';
import MapViewContainer from '../containers/MapViewContainer';
import FabContainer from '../containers/FabContainer';

import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <MapViewContainer
          onMapLoad={() => {}}
          onMapClick={() => {}}
          options={{ disableDefaultUI: true }}
        />
      <FabContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
