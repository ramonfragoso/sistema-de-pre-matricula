import React from 'react';
import {Card} from 'semantic-ui-react';
import '../../Aluno/Aluno.css';

export default class CadastrarDisciplinasBox extends React.Component {

  render() {
    return(
      <Card onClick={(e) => this.props.handleClick("cadastrar", e)}>
        <i class="far fa-file-alt icone"></i>
        <Card.Content extra>
          <Card.Header>CADASTRAR DISCIPLINA</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
