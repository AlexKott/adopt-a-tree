import { DEFINE_VIDEO_SIZE } from './const';

function action(videoSize) {
  return { type: DEFINE_VIDEO_SIZE, videoSize };
}

module.exports = action;
