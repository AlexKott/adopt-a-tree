import { SHOW_MAP } from './const';
import setGeolocation from './setGeolocation.js';

function action() {
  return (dispatch, getState) => {
    const position = getState().mapView.position;
    dispatch(setGeolocation(position));
    dispatch({ type: SHOW_MAP });
  }
}

module.exports = action;
