import React from 'react';
import './fab.less';

class Fab extends React.Component {

  render() {
    return (
      <button type="button" className="cta" onClick={this.props.action} ></button>
    );
  }
}

Fab.displayName = 'Fab';
Fab.propTypes = {};
Fab.defaultProps = {};

export default Fab;
