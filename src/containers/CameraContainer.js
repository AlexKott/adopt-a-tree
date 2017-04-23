import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { takePicture } from '../actions/';
import Webcam from 'react-user-media';
import Fab from '../components/Fab';

class CameraContainer extends Component {

  takePicture() {
    const image = this.refs.camera.captureScreenshot();
    this.props.actions.takePicture(image);
  }

  render() {
    return (
      <div className="wrapper">
        <Webcam ref="camera" width={this.props.width} height={this.props.height} audio={false} />
        <Fab action={() => this.takePicture()} iconName={'done'} />
      </div>
    );
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
  const actions = { takePicture };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer);
