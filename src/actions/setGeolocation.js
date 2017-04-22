import { SET_GEOLOCATION } from './const';

function action(position) {
  return { type: SET_GEOLOCATION, position };
}

module.exports = action;
