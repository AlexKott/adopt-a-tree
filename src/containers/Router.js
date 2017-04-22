import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { defineVideoSize, addTree, takePicture, registerTree } from '../actions/';
import CameraContainer from './CameraContainer';
import MapViewContainer from './MapViewContainer';
import CreateTreeContainer from './CreateTreeContainer';
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
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    const video = document.querySelector('#camera');
    context.drawImage(video, 0, 0);
    const image = canvas.toDataURL('image/jpeg');
    this.props.mediaStream.getTracks()[0].stop();
    this.props.actions.takePicture(image);
  }

  render() {
    if (this.props.isTakingPicture) {
      return (
        <div className="wrapper">
          <CameraContainer />
          <canvas id="canvas" width={this.props.videoSize.width} height={this.props.videoSize.height} />
          <Fab action={() => this.takePicture()} />
        </div>
      )
    } else if (this.props.picture) {
      return (
        <div className="wrapper">
          <CreateTreeContainer picture={this.props.picture} />
          <Fab action={() => this.props.actions.registerTree()} />
        </div>
      )
    } else if (this.props.isWarning) {
      return (
        <div></div>
      )
    } else if (this.props.isAlert) {
      return (
        <div></div>
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
    mediaStream: state.mapView.mediaStream,
    picture: state.mapView.picture
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { defineVideoSize, addTree, takePicture, registerTree };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
