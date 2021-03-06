/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import startAlert from '../actions/startAlert.js';
import startApp from '../actions/startApp.js';
import checkIn from '../actions/checkIn.js';
import addPoints from '../actions/addPoints.js';
import sendAlert from '../actions/sendAlert.js';
import sendWarning from '../actions/sendWarning.js';
import showAlert from '../actions/showAlert.js';
import showWarning from '../actions/showWarning.js';
import saveMarkers from '../actions/saveMarkers.js';
import showMap from '../actions/showMap.js';
import openTree from '../actions/openTree.js';
import registerTree from '../actions/registerTree.js';
import changeTreeName from '../actions/changeTreeName.js';
import setMediaStream from '../actions/setMediaStream.js';
import takePicture from '../actions/takePicture.js';
import defineVideoSize from '../actions/defineVideoSize.js';
import addTree from '../actions/addTree.js';
import setGeolocation from '../actions/setGeolocation.js';
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
module.exports = actions;
