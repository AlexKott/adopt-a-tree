import React from 'react';
import './fab.less';

import IconTree from '../images/IconTree';
import IconDone from '../images/IconDone';

class Fab extends React.Component {

  render() {
    const icons = {
      tree: <IconTree />,
      done: <IconDone />
    }
    return (
      <button type="button" className={`cta ${this.props.classes}`} onClick={this.props.action}>
        {this.props.iconName && icons[this.props.iconName]}
      </button>
    );
  }
}

Fab.displayName = 'Fab';
Fab.propTypes = {};
Fab.defaultProps = {};

export default Fab;
