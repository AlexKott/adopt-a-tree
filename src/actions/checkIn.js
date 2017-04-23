import { CHECK_IN, ADD_POINTS } from './const';

import config from 'config';

import request from 'superagent';

function action() {
  return (dispatch, getState) => {
    const id = getState().mapView.activeTree.id
    request
      .post(`${config.apiUrl}/${id}/checkin`)
      .end((err, response) => {
        dispatch({ type: CHECK_IN });
        dispatch({ type: ADD_POINTS, points: 3 });
      });
  }
}

module.exports = action;
