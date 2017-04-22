import { REGISTER_TREE } from './const';

import request from 'superagent';

function action() {
  return (dispatch, getState) => {
    const state = getState().mapView;
    const tree = {
      name: state.treeName,
      position: state.position,
      picture: state.picture
    }
    request
      .post('API')
      .send(tree)
      .end((d) => {
        console.log(d)
        dispatch({ type: REGISTER_TREE });
      });
  }
}

module.exports = action;
