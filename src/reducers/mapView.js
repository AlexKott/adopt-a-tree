import config from 'config';
import { SET_GEOLOCATION,
  ADD_TREE, DEFINE_VIDEO_SIZE, TAKE_PICTURE, SET_MEDIA_STREAM,
CHANGE_TREE_NAME, REGISTER_TREE } from '../actions/const';

const initialState = {
  position: config.defaultPosition,
  zoom: config.defaultZoom,
  isAddingTree: false,
  isTakingPicture: false,
  videoSize: {
    width: 320,
    height: 640
  },
  mediaStream: null,
  picture: null,
  treeName: '',
  activeProfile: null,
  trees: [
    {
      id: 1,
      name: 'Hans',
      position: {
        lat: 41.709219,
        lng: 44.80313
      },
      picture: ''
    },
    {
      id: 2,
      name: 'Peter',
      position: {
        lat: 41.809219,
        lng: 44.80313
      },
      picture: ''
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GEOLOCATION:
      return Object.assign({}, state, { position: action.position });
    case ADD_TREE:
      return Object.assign({}, state, { isTakingPicture: true });
    case DEFINE_VIDEO_SIZE:
      return Object.assign({}, state, { videoSize: action.videoSize });
    case SET_MEDIA_STREAM:
      return Object.assign({}, state, { mediaStream: action.mediaStream });
    case TAKE_PICTURE:
      return Object.assign({}, state, { isTakingPicture: false, isAddingTree: true, picture: action.picture });
    case  CHANGE_TREE_NAME:
      return Object.assign({}, state, { treeName: action.name });
    case REGISTER_TREE:

      return Object.assign({}, state, { isAddingTree: false, activeProfile: action.tree.id });
    default: {
      return state;
    }
  }
}

module.exports = reducer;
