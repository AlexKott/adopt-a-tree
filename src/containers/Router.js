import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { defineVideoSize, addTree, takePicture } from '../actions/';
import CameraContainer from './CameraContainer';
import MapViewContainer from './MapViewContainer';
import Fab from '../components/Fab';

class Router extends Component {

  componentDidMount() {
    const videoSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.props.actions.defineVideoSize(videoSize);
  }

  takePicture() {
    const canvas = document.querySelector('#camera-picture');
    const context = canvas.getContext('2d');
    const video = document.querySelector('#camera');
    context.drawImage(video, 0, 0, this.props.videoSize.width, this.props.videoSize.height);
    this.props.mediaStream.getTracks()[0].stop();
    //this.props.actions.takePicture();
    video.style.display = 'none';

  }

  render() {
    if (this.props.isTakingPicture) {
      return (
        <div className="wrapper">
          <CameraContainer />
          <canvas id="camera-picture" width={this.props.videoSize.width} height={this.props.videoSize.height} />
          <Fab action={() => this.takePicture()} />
        </div>
      )
    } else {
      return (
        <div className="wrapper">
          <MapViewContainer
            onMapLoad={() => {}}
            onMapClick={() => {}}
            options={{ disableDefaultUI: true }}
          />
        <Fab action={this.props.actions.addTree} />
        </div>
      )
    }
  }
}

Router.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {
    isAddingTree: state.mapView.isAddingTree,
    isTakingPicture: state.mapView.isTakingPicture,
    videoSize: state.mapView.videoSize,
    mediaStream: state.mapView.mediaStream
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { defineVideoSize, addTree, takePicture };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
