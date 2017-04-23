import { START_ALERT } from './const';

function action(show) {
  if (show === undefined) {
    show = true;
  }
  return { type: START_ALERT, show };
}

module.exports = action;
