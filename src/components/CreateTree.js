import React from 'react';
import './treeprofile.less';

class CreateTree extends React.Component {

  render() {
    return (
      <main className="profile">
        <article className="profile__box profile__box--row">
          <div className="profile__image" style={{'backgroundImage': `url(${this.props.picture})`}}/>
          <h2 className="profile__title">You just adopted this tree!</h2>
        </article>
        <article className="profile__box">
          <h3>Why don't you give it a name?</h3>
          <input onChange={(event) => this.props.onChangeName(event.target.value)} value={this.props.treeName} />
        </article>
        <article className="profile__box">
          <h3>It's located at
            <span> {this.props.location.lng} / {this.props.location.lat}</span>
          </h3>
        </article>
      </main>
    );
  }
}

CreateTree.displayName = 'CreateTree';
CreateTree.propTypes = {};
CreateTree.defaultProps = {};

export default CreateTree;
