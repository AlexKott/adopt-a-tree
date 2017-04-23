import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { defineVideoSize, addTree, takePicture, registerTree, sendAlert, sendWarning, startApp } from '../actions/';
import CameraContainer from './CameraContainer';
import MapViewContainer from './MapViewContainer';
import CreateTreeContainer from './CreateTreeContainer';
import TreeProfileContainer from './TreeProfileContainer';
import Fab from '../components/Fab';
import LoadingScreen from '../components/LoadingScreen';
import IssueAlert from '../components/IssueAlert.js';

import config from 'config';

class Router extends Component {

  componentDidMount() {
    const that = this;
    if (config.appEnv === 'dist') {
      window.addEventListener('click', goFullScreen);
    } else {
      this.props.actions.startApp();
    }

    function goFullScreen() {
      const doc = window.document;
      const docEl = doc.documentElement;

      const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

      requestFullScreen.call(docEl);
      window.removeEventListener('click', goFullScreen);
      window.addEventListener('click', startApp);
    }

    function startApp() {
      that.props.actions.startApp();
    }

    const videoSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.props.actions.defineVideoSize(videoSize);
  }

  render() {
    if (this.props.isTakingPicture) {
      return (
        <CameraContainer />
      )
    } else if (this.props.isAddingTree) {
      return (
        <div className="wrapper">
          <CreateTreeContainer picture={this.props.picture} />
          <Fab action={() => this.props.actions.registerTree()} iconName={'done'} />
        </div>
      )
    } else if (this.props.isViewingTree) {
      return (
        <TreeProfileContainer points={this.props.points} />
      )
    } else if (this.props.isWarning) {
      return (
        <IssueAlert
          title="Oh no! You detected a potential threat?"
          text="Let others know what's wrong with this tree:"
          color="yellow"
          sendAlert={(msg) => this.props.actions.sendWarning(msg)}
        />
      )
    } else if (this.props.isAlert) {
      return (
        <IssueAlert
          title="Oh no! You're having a tree-emergency?"
          text="Let others know what’s happening to this tree right now:"
          color="red"
          isAlert
          sendAlert={(msg) => this.props.actions.sendAlert(msg)}
        />
      )
    } else {
      const showLoading = !this.props.isStarted || this.props.isLoading;
      return (
        <div className="wrapper">
          {showLoading && <LoadingScreen />}
          <div className="points">You have {this.props.points} points.</div>
          <MapViewContainer
            onMapLoad={() => {}}
            onMapClick={() => {}}
            options={{ disableDefaultUI: true }}
          />
          <Fab action={this.props.actions.addTree} iconName={'tree'} />
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
    isStarted: state.mapView.isStarted,
    isLoading: state.mapView.isLoading,
    isAddingTree: state.mapView.isAddingTree,
    isTakingPicture: state.mapView.isTakingPicture,
    isViewingTree: state.mapView.isViewingTree,
    isWarning: state.mapView.isWarning,
    isAlert: state.mapView.isAlert,
    videoSize: state.mapView.videoSize,
    mediaStream: state.mapView.mediaStream,
    picture: state.mapView.picture,
    points: state.mapView.points
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { defineVideoSize, addTree, takePicture, registerTree, sendAlert, sendWarning, startApp };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
