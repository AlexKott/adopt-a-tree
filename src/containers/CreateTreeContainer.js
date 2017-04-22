import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTreeName } from '../actions/';
import CreateTree from '../components/CreateTree';

class CreateTreeContainer extends Component {
  render() {
    const { actions } = this.props;
    return <CreateTree
      picture={this.props.picture}
      location={this.props.location}
      treeName={this.props.treeName}
      onChangeName={actions.changeTreeName}
    />;
  }
}

CreateTreeContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {
    picture: state.mapView.picture,
    location: state.mapView.position,
    treeName: state.mapView.treeName
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { changeTreeName };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTreeContainer);
