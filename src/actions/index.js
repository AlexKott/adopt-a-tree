/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
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
  setMediaStream
};
module.exports = actions;
