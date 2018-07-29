
import React from 'react';
import {Card} from 'semantic-ui-react';
import '../../Aluno/Aluno.css';

export default class VerPreMatriculasBox extends React.Component {

  render() {

    return(
      <Card onClick={(e) => this.props.handleClick("prematriculas", e)}>
        <i class="fas fa-users icone"></i>
        <Card.Content extra>
          <Card.Header>VER PRÉ-MATRÍCULAS</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
