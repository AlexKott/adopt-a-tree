import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMap, showWarning, showAlert } from '../actions/';
import TreeProfile from '../components/TreeProfile';

class TreeProfileContainer extends Component {
  render() {
    const { actions } = this.props;
    return (
      <TreeProfile
        name={this.props.name}
        picture={this.props.picture}
        showMap={this.props.actions.showMap}
        showWarning={this.props.actions.showWarning}
        showAlert={this.props.actions.showAlert}
      />
    );
  }
}

TreeProfileContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {
    name: state.mapView.activeTree.name,
    picture: state.mapView.activeTree.picture,
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { showMap, showWarning, showAlert };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeProfileContainer);
