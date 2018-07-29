import React from 'react';
import {Card} from 'semantic-ui-react';
import '../Aluno.css';

export default class VerInformacoesBox extends React.Component {

  render() {
    return(
      <Card onClick={(e) => this.props.handleClick("informacoes", e)}>
        <i className="fas fa-layer-group icone"></i>
        <Card.Content extra>
          <Card.Header>VER INFORMAÇÕES</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
