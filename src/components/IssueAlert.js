import React from 'react';
import Fab from './Fab.js';
import './issuealert.less';
import './treeprofile.less';

class IssueAlert extends React.Component {

  render() {
    return (
      <main className={`alert__background alert__background--${this.props.color}`}>
        <h1 className="alert__title">{this.props.title}</h1>
        <article className="profile__box">
          <h3 className="profile__section-title">{this.props.text}</h3>
          <textarea className="alert__textbox"></textarea>
          {this.props.isAlert && <p className="profile__stats">This will send an alert to all foster parents requesting immediate help!</p>}
          <Fab classes={`fab--center fab--${this.props.color}`} />
        </article>
      </main>
    );
  }
}

export default IssueAlert;