import config from 'config';
import { SET_GEOLOCATION } from '../actions/const';

const initialState = {
  position: config.defaultPosition,
  zoom: config.defaultZoom
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GEOLOCATION:
      return Object.assign({}, { position: action.position });
    default: {
      return state;
    }
  }
}

module.exports = reducer;
