import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import config from 'config';

import './mapview.less';

const MapView = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    onClick={props.onMapClick}
    options={config.mapOptions}
    center={props.center}
    defaultZoom={config.defaultZoom}
  >
  </GoogleMap>
))

MapView.displayName = 'MapView';
MapView.propTypes = {};
MapView.defaultProps = {};

export default MapView;
