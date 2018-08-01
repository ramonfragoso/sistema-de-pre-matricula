import React from 'react';
import {Route, Router} from 'react-router-dom';
import {Divider, Header, Container} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';
import FormDisciplina from './FormDisciplina';

import '../../Aluno/Aluno.css';

export default class CadastrarDisciplina extends React.Component {

  render() {
    return(
      <div className="topo">
        <FixedNavbar handleLogout={this.props.handleLogout}/>
        <Container>
          <Header><h1>Cadastrar Disciplina</h1></Header>
          <Divider/>
          <FormDisciplina/>
        </Container>
      </div>
    )
  }
}
