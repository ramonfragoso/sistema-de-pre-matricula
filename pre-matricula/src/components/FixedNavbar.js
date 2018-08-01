import React from 'react';
import {Item} from 'semantic-ui-react';
import { Route, Redirect } from 'react-router-dom'




export default class FixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false


    }
    this.onClick = this.onClick.bind(this)
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  onClick = e => {
    e.preventDefault();
    this.setRedirect();
    console.log("oi");
    setTimeout(() => {this.props.handleLogout("loggedOff","")}, 50);

  }


  render() {
    return(
      <div className="ui fixed inverted menu">
        {this.state.redirect ? <Redirect to="/home"/> : <div></div>}
        <p className="header item">Pré-Matrícula</p>
        <a className="item" onClick={this.setRedirect}> <i className="fas fa-home"></i></a>
        <a className="right item" onClick={(e) => {this.onClick(e)}}><i className="fas fa-sign-out-alt"></i></a>
      </div>
    )
  }
}
