import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setGeolocation, openTree, saveMarkers } from '../actions/';
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
        trees={this.props.trees}
        markers={this.props.markers}
        position={this.props.position}
        openTree={(id) => this.props.actions.openTree(id)}
        saveMarkers={(markers) => this.props.actions.saveMarkers(markers)}
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
    zoom: state.mapView.zoom,
    trees: state.mapView.trees,
    markers: state.mapView.markers
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    setGeolocation,
    openTree,
    saveMarkers
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(MapViewContainer);
