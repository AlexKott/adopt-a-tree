import React from 'react';
import Fab from './Fab.js';
import './issuealert.less';
import './treeprofile.less';
import './fab.less';

import IconDone from '../images/IconDone';

class FakeAlert extends React.Component {

  render() {
    return (
      <main className="alert__background alert__background--fake">
        <article className="profile__box profile__box--fake">
          <h2 className="profile__section-title">A tree you care about is in danger!</h2>
        </article>
        <button type="button" className="cta fab--center fab--fake" onClick={this.props.startAlert} >Go!</button>
      </main>
    );
  }
}

export default FakeAlert;
