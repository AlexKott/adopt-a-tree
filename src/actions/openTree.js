import { OPEN_TREE } from './const';

import config from 'config';

import request from 'superagent';

function action(id) {
  return (dispatch, getState) => {
    request
      .get(`${config.apiUrl}/${id}`)
      .end((err, response) => {
        const rTree = response.body.tree;
        const tree = {
          name: rTree.name,
          position: {
            lng: rTree.location.coordinates[0],
            lat: rTree.location.coordinates[1]
          },
          picture: rTree.picture || null,
          id: rTree._id.$oid
        }
        dispatch({ type: OPEN_TREE, tree });
      });
    }
}

module.exports = action;
