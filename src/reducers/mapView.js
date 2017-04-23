import config from 'config';
import { SET_GEOLOCATION,
  ADD_TREE, DEFINE_VIDEO_SIZE, TAKE_PICTURE, SHOW_WARNING, SHOW_ALERT, ADD_POINTS,
CHANGE_TREE_NAME, REGISTER_TREE, OPEN_TREE, SHOW_MAP, SAVE_MARKERS } from '../actions/const';

const initialState = {
  position: config.defaultPosition,
  zoom: config.defaultZoom,
  isLoading: true,
  isAddingTree: false,
  isTakingPicture: false,
  videoSize: {
    width: 320,
    height: 640
  },
  picture: null,
  treeName: '',
  activeTree: null,
  trees: [],
  markers: [],
  points: 540
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GEOLOCATION:
      return Object.assign({}, state, { position: action.position, trees: action.trees, isLoading: false });
    case ADD_TREE:
      return Object.assign({}, state, { isTakingPicture: true });
    case DEFINE_VIDEO_SIZE:
      return Object.assign({}, state, { videoSize: action.videoSize });
    case TAKE_PICTURE:
      return Object.assign({}, state, { isTakingPicture: false, isAddingTree: true, picture: action.picture });
    case  CHANGE_TREE_NAME:
      return Object.assign({}, state, { treeName: action.name });
    case REGISTER_TREE:
      return Object.assign({}, state, { isAddingTree: false, isViewingTree: true, activeTree: action.tree });
    case OPEN_TREE:
      return Object.assign({}, state, { isViewingTree: true, activeTree: action.tree });
    case SHOW_MAP:
      return Object.assign({}, state, { isViewingTree: false, isAddingTree: false, isTakingPicture: false, isWarning: false, isAlert: false });
    case SAVE_MARKERS:
      return Object.assign({}, state, { markers: action.markers });
    case SHOW_WARNING:
      return Object.assign({}, state, { isViewingTree: false, isWarning: true });
    case SHOW_ALERT:
      return Object.assign({}, state, { isViewingTree: false, isAlert: true });
    case ADD_POINTS:
      return Object.assign({}, state, { points: state.points + action.points });
    default: {
      return state;
    }
  }
}

module.exports = reducer;
