import React from 'react';
import {Item} from 'semantic-ui-react';
import { Route, Redirect } from 'react-router'
export default class FixedNavbar extends React.Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home'/>
    }
  }

  render() {
    return(
      <div className="ui fixed inverted menu">
        {this.renderRedirect()}
        <p className="header item">Pré-Matrícula</p>
        <a className="item" onClick={this.setRedirect}> <i className="fas fa-home"></i></a>
        <a className="right item"><i className="fas fa-bell"></i></a>
        <a className="item" onClick={(e) => this.props.handleLogout("loggedOff", e)}><i className="fas fa-sign-out-alt"></i></a>
      </div>
    )
  }
}
