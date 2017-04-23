import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMap, showWarning, showAlert, checkIn } from '../actions/';
import TreeProfile from '../components/TreeProfile';

class TreeProfileContainer extends Component {
  render() {
    const { actions } = this.props;
    return (
      <TreeProfile
        name={this.props.name}
        picture={this.props.picture}
        status={this.props.status}
        message={this.props.message}
        checkinCount={this.props.checkinCount}
        showMap={this.props.actions.showMap}
        showWarning={this.props.actions.showWarning}
        showAlert={this.props.actions.showAlert}
        checkIn={this.props.actions.checkIn}
        points={this.props.points}
        hasCheckedIn={this.props.hasCheckedIn}
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
    status: state.mapView.activeTree.status,
    message: state.mapView.activeTree.message || null,
    checkinCount: state.mapView.activeTree.checkinCount || 0,
    hasCheckedIn: state.mapView.hasCheckedIn || false
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { showMap, showWarning, showAlert, checkIn };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeProfileContainer);
