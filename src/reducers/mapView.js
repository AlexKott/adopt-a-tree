import config from 'config';
import { SET_GEOLOCATION,
  ADD_TREE, DEFINE_VIDEO_SIZE, TAKE_PICTURE,
CHANGE_TREE_NAME, REGISTER_TREE, OPEN_TREE, SHOW_MAP, SAVE_MARKERS } from '../actions/const';

const initialState = {
  position: config.defaultPosition,
  zoom: config.defaultZoom,
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
  markers: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GEOLOCATION:
      return Object.assign({}, state, { position: action.position, trees: action.trees });
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
      return Object.assign({}, state, { isViewingTree: false, isAddingTree: false, isTakingPicture: false });
    case SAVE_MARKERS:
      return Object.assign({}, state, { markers: action.markers });
    default: {
      return state;
    }
  }
}

module.exports = reducer;
