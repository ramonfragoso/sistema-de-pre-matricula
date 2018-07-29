import React from 'react';
import {Card} from 'semantic-ui-react';
import '../../Aluno/Aluno.css';

export default class EditarDisciplinasBox extends React.Component {

  render() {
    return(
      <Card onClick={(e) => this.props.handleClick("editar", e)}>
        <i class="fas fa-wrench icone"></i>
        <Card.Content extra>
          <Card.Header>EDITAR DISCIPLINA</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
