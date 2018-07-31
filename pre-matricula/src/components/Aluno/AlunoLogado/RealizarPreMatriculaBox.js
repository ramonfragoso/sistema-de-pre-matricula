import React from 'react';
import {Card} from 'semantic-ui-react';
import '../Aluno.css';
import { Route, Redirect } from 'react-router-dom';

export default class RealizarPreMatriculaBox extends React.Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/matricula'/>
    }
  }
  render() {
    return(
      <Card onClick={this.setRedirect}>
        {this.renderRedirect()}
        <i className="far fa-edit icone"></i>
        <Card.Content extra>
          <Card.Header>REALIZAR PRÉ-MATRÍCULA</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
