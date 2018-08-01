import React from 'react';
import {Route, Router} from 'react-router-dom';
import {Divider, Header, Container} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';
import { Link } from 'react-router-dom';
import FormDisciplinaEditar from './FormDisciplinaEditar';

import '../../Aluno/Aluno.css';



export default class EditarDisciplinaCodigo extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return(
      <div className="topo">
        <FixedNavbar handleLogout={this.props.handleLogout}/>
        <Container>
          <Header><h1>Editar Disciplina</h1></Header>
          <Divider/>
          <FormDisciplinaEditar codigo={this.props.match.match.params.num}/>
        </Container>
      </div>
    )
  }
}
