import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setGeolocation } from '../actions/';
import MapView from '../components/MapView';

class MapViewContainer extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const position = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      this.props.actions.setGeolocation(position);
    });
  }
  render() {
    return (
      <MapView
        containerElement={
          <div style={{ height: `100%`, width: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%`, width: `100%`  }} />
        }
        center={this.props.position}
        zoom={this.props.zoom}
      />
    );
  }
}

MapViewContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {
    position: state.mapView.position,
    zoom: state.mapView.zoom
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    setGeolocation
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(MapViewContainer);
