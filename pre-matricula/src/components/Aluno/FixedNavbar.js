import React from 'react';
import {Item} from 'semantic-ui-react';

export default class FixedNavbar extends React.Component {


  render() {
    return(
      <div className="ui fixed inverted menu">
        <a className="header item">Pré-Matrícula</a>
        <a className="item"onClick={(e) => this.props.handleClick("home", e)}><i className="fas fa-home"></i></a>
        <a className="right item"><i className="fas fa-bell"></i></a>
        <a className="item"><i className="fas fa-sign-out-alt"></i></a>
      </div>
    )
  }
}
