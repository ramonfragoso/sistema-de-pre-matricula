import React from 'react';
import {Card} from 'semantic-ui-react';
import '../Aluno.css';

export default class RealizarPreMatriculaBox extends React.Component {

  render() {
    return(
      <Card onClick={(e) => this.props.handleClick("matricula", e)}>
        <i className="far fa-edit icone"></i>
        <Card.Content extra>
          <Card.Header>REALIZAR PRÉ-MATRÍCULA</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
