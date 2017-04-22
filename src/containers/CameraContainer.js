import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMediaStream } from '../actions/';
import Camera from '../components/Camera';

class CameraContainer extends Component {
  render() {
    return <Camera width={this.props.width} height={this.props.height} setMediaStream={this.props.actions.setMediaStream} />;
  }
}

CameraContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {
    width: state.mapView.videoSize.width,
    height: state.mapView.videoSize.height,
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { setMediaStream };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer);
