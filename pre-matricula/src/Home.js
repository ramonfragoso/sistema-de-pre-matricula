import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login.js';
import AlunoHomepage from './components/Aluno/AlunoLogado/AlunoHomepage';

class Home extends Component {
  constructor(props) {
  super(props);
}
  render() {
    return (
      <div>
        {this.props.loginState == "loggedOff" ? <Login handleChange={this.props.handleFromParent}/> : (this.props.loginState == "Aluno" ? <AlunoHomepage/> : <h1> menu coordenador </h1>)}
      </div>
    );
  }
}

export default Home;
