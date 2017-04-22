import { SAVE_MARKERS } from './const';

function action(markers) {
  return { type: SAVE_MARKERS, markers };
}

module.exports = action;
