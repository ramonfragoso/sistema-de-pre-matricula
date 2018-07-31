import React from 'react';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';
import {Divider, Header, Container, Grid} from 'semantic-ui-react';
import CadastrarDisciplina from '../CadastrarDisciplina/CadastrarDisciplina';
import EditarDisciplina from '../EditarDisciplina/EditarDisciplina';
import EditarDisciplinaCodigo from './EditarDisciplinaCodigo';
import Coordenador from './Coordenador'
import '../../Aluno/Aluno.css';

export default class CoordenadorHomepage extends React.Component {
  construct



  render() {
    return(
      <div>
      <Route path="/" exact render={() => <Coordenador handleLogout={this.props.handleLogout}/>}/>
      <Route path="/home" exact render={() => <Coordenador handleLogout={this.props.handleLogout}/>}/>
      <Route path="/cadastro" exact render={() => <CadastrarDisciplina handleLogout={this.props.handleLogout}/>}/>
      <Route path="/editar" exact render={() => <EditarDisciplina handleLogout={this.props.handleLogout}/>}/>
      <Route path="/editar/:num" exact render={(match) => <EditarDisciplinaCodigo props={match} handleLogout={this.props.handleLogout}/>}/>
      </div>
      )
  }


}
