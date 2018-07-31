import React from 'react';
import {Route, Router} from 'react-router';
import {Divider, Header, Container, Grid} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';
import VerPreMatriculasBox from './VerPreMatriculasBox';
import EditarDisciplinasBox from './EditarDisciplinasBox';
import CadastrarDisciplinasBox from './CadastrarDisciplinasBox';
import CadastrarDisciplina from '../CadastrarDisciplina/CadastrarDisciplina';
import Coordenador from './Coordenador'
import '../../Aluno/Aluno.css';

export default class CoordenadorHomepage extends React.Component {



  render() {
    return(
      <div>
      <Route path="/" exact render={() => <Coordenador handleLogout={this.props.handleLogout}/>}/>
      <Route path="/home" exact render={() => <Coordenador handleLogout={this.props.handleLogout}/>}/>
      <Route path="/cadastro" exact render={() => <CadastrarDisciplina handleLogout={this.props.handleLogout}/>}/>
      </div>
      )
  }


}
