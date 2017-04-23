import React from 'react';
import './treeprofile.less';

import IconAlert from '../images/IconAlert.js';

class TreeProfile extends React.Component {

  render() {
    const safetybarClass = `safetybar safetybar--${this.props.status}`;
    return (
      <main className="profile">
        <article className="profile__box profile__box--row">
          <div className="profile__image" style={{ backgroundImage: `url(${this.props.picture})` }} />
          <h2 className="profile__title">This is {this.props.name}.</h2>
        </article>
        <article className="profile__box">
          <h3 className="profile__section-title">Safety level: {this.props.status}</h3>
          <div className={safetybarClass}><div className="safetybar__progress"></div></div>
          <p className="profile__stats">XXX foster parents – XXX points</p>
          <p className="profile__stats">XXX check-ins – XXX points</p>
          <p className="profile__stats">XXX picture – XXX points</p>
        </article>
        <article className="profile__box">
          <h3 className="profile__section-title">Improve XXX's safety:</h3>
          <div className="protect-button__wrapper">
            <button className="protect-button">Check on the tree</button>
            <p className="protect-button__label">Do this at least once a week to keep up the protection.</p>
          </div>
          <div className="protect-button__wrapper">
            <button className="protect-button">Be a foster parent</button>
            <p className="protect-button__label">The more people foster the tree the safer it becomes!</p>
          </div>
          <div className="protect-button__wrapper">
            <button className="protect-button">Take a picture</button>
            <p className="protect-button__label">This can be done once a month by any of the foster parents.</p>
          </div>
        </article>
        <nav className="bottom-bar">
          <button className="bottom-bar__button bottom-bar__button--yellow" onClick={() => this.props.showWarning()}>!</button>
          <button className="bottom-bar__button bottom-bar__button--red" onClick={() => this.props.showAlert()}><IconAlert /></button>
          <button className="bottom-bar__button" onClick={() => this.props.showMap()}>X</button>
        </nav>
      </main>
    );
  }
}

export default TreeProfile;
