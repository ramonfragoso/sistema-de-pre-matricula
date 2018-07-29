import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login.js';
import AlunoHomepage from './components/Aluno/AlunoLogado/AlunoHomepage';
import CoordenadorHomepage from './components/Coordenador/CoordenadorLogado/CoordenadorHomepage';

class Home extends Component {
  constructor(props) {
  super(props);
}
  render() {
    return (
      <div>
        {this.props.loginState == "loggedOff" ?
            <Login handleChange={this.props.handleFromParent}/>
            : (this.props.loginState == "Aluno" ? <AlunoHomepage handleLogout={this.props.handleLogout}/>
            : <CoordenadorHomepage handleLogout={this.props.handleLogout} />)}
      </div>
    );
  }
}

export default Home;
