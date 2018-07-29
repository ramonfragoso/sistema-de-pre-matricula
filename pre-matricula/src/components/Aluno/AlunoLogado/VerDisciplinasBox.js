
import React from 'react';
import {Card} from 'semantic-ui-react';
import '../Aluno.css';

export default class VerDisciplinasBox extends React.Component {

  render() {

    return(
      <Card onClick={(e) => this.props.handleClick("disciplinas", e)}>
        <i className="fas fa-graduation-cap icone"></i>
        <Card.Content>
          <Card.Header>VER DISCIPLINAS</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
