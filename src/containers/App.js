/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  setGeolocation,
  addTree,
  defineVideoSize,
  takePicture,
  setMediaStream,
  changeTreeName,
  registerTree,
  openTree,
  showMap,
  saveMarkers,
  showWarning,
  showAlert,
  sendWarning,
  sendAlert,
  addPoints,
  checkIn,
  startApp,
  startAlert
} from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, mapView} = this.props;
    return <Main actions={actions} mapView={mapView}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    setGeolocation: PropTypes.func.isRequired,
    addTree: PropTypes.func.isRequired,
    defineVideoSize: PropTypes.func.isRequired,
    takePicture: PropTypes.func.isRequired,
    setMediaStream: PropTypes.func.isRequired,
    changeTreeName: PropTypes.func.isRequired,
    registerTree: PropTypes.func.isRequired,
    openTree: PropTypes.func.isRequired,
    showMap: PropTypes.func.isRequired,
    saveMarkers: PropTypes.func.isRequired,
    showWarning: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired,
    sendWarning: PropTypes.func.isRequired,
    sendAlert: PropTypes.func.isRequired,
    addPoints: PropTypes.func.isRequired,
    checkIn: PropTypes.func.isRequired,
    startApp: PropTypes.func.isRequired,
    startAlert: PropTypes.func.isRequired
  }),
  mapView: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = { mapView: state.mapView };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    setGeolocation,
    addTree,
    defineVideoSize,
    takePicture,
    setMediaStream,
    changeTreeName,
    registerTree,
    openTree,
    showMap,
    saveMarkers,
    showWarning,
    showAlert,
    sendWarning,
    sendAlert,
    addPoints,
    checkIn,
    startApp,
    startAlert
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
