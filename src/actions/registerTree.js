import { REGISTER_TREE } from './const';

import config from 'config';

import request from 'superagent';

function action() {
  return (dispatch, getState) => {
    const state = getState().mapView;
    const tree = {
      name: state.treeName,
      longitude: state.position.lng,
      latitude: state.position.lat,
      user_d: config.userId,
      picture: state.picture
    }
    request
      .post(config.apiUrl)
      .send(tree)
      .end((d) => {
        dispatch({ type: REGISTER_TREE, tree });
      });
  }
}

module.exports = action;
