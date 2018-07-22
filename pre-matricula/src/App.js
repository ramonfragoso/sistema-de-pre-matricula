import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AlunoHomepage from './components/Aluno/AlunoHomepage';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <Route path="/" exact component={Login} />
        <Route path="/login_aluno" exact component={AlunoHomepage} />

      </div>
    );
  }
}

export default App;
