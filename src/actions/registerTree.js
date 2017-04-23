import { REGISTER_TREE, ADD_POINTS } from './const';

import config from 'config';

import request from 'superagent';

function action() {
  return (dispatch, getState) => {
    const state = getState().mapView;
    const rTree = {
      name: state.treeName,
      longitude: state.position.lng,
      latitude: state.position.lat,
      user_d: config.userId,
      picture: state.picture
    };
    const tree = {
      name: state.treeName,
      position: {
        lng: state.position.lng,
        lat: state.position.lat,
      },
      picture: state.picture
    };
    request
      .post(config.apiUrl)
      .send(rTree)
      .end((d) => {
        dispatch({ type: ADD_POINTS, points: 50 });
        dispatch({ type: REGISTER_TREE, tree });
      });
  }
}

module.exports = action;
