import { ADD_POINTS } from './const';

function action(points) {
  return { type: ADD_POINTS, points };
}

module.exports = action;
