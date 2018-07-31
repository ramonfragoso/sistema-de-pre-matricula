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
    return(
      <div className="topo">
        <FixedNavbar/>
        <Container>
          <Header><h1>Editar Disciplina</h1></Header>
          <Divider/>
          <FormDisciplinaEditar codigo={this.props.props.match.params.num}/>
        </Container>
      </div>
    )
  }
}
