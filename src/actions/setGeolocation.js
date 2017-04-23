import { SET_GEOLOCATION } from './const';

import config from 'config';

import request from 'superagent';

function action(position) {
  return (dispatch, getState) => {
    request
      .get(config.apiUrl)
      .query({ longitude: position.lng, latitude: position.lat })
      .end((err, response) => {
        const trees = response.body.trees.map((tree, i) => ({
          name: tree.name,
          position: {
            lng: tree.location.coordinates[0],
            lat: tree.location.coordinates[1]
          },
          id: tree._id.$oid,
          status: tree.status || i === 1 ? 'alert' : 'protected'
        }));
        dispatch({ type: SET_GEOLOCATION, position, trees });
      });
  }
}

module.exports = action;
