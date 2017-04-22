import { CHANGE_TREE_NAME } from './const';

function action(name) {
  return { type: CHANGE_TREE_NAME, name };
}

module.exports = action;
