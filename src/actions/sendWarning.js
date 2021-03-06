import { SEND_WARNING } from './const';
import { SHOW_MAP } from './const';

import config from 'config';

import request from 'superagent';

function action(message) {
  return (dispatch, getState) => {
    const id = getState().mapView.activeTree.id;
    request
      .put(`${config.apiUrl}/${id}`)
      .send({ state: 'warning', message })
      .end((d) => {
        dispatch({ type: SHOW_MAP });
      });
  }
}

module.exports = action;
