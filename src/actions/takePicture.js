import { TAKE_PICTURE } from './const';

function action(picture) {
  return { type: TAKE_PICTURE, picture };
}

module.exports = action;
