import { SET_MEDIA_STREAM } from './const';

function action(mediaStream) {
  return { type: SET_MEDIA_STREAM, mediaStream };
}

module.exports = action;
