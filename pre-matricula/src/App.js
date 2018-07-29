import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AlunoHomepage from './components/Aluno/AlunoLogado/AlunoHomepage';
import Home from './Home'


import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.handleLoginChange = this.handleLoginChange.bind(this);
  this.state = {loginStatus: "loggedOff"};
}
  handleLoginChange(newLoginStatus){

    this.setState({loginStatus: newLoginStatus})
    console.log(this.state);

  }


  render() {
    return (
      <div>
        <Route path="/" exact render={() => <Home handleFromParent={this.handleLoginChange} loginState={this.state.loginStatus}/>}/>
      </div>
    );
  }
}

export default App;
