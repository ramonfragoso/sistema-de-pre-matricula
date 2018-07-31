import React from 'react';
import {Card} from 'semantic-ui-react';
import '../../Aluno/Aluno.css';
import { Route, Redirect } from 'react-router'

export default class EditarDisciplinasBox extends React.Component {
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
      return <Redirect to='/cadastro'/>
    }
  }
  render() {
    return(
      <Card onClick={this.setRedirect}>
        {this.renderRedirect()}
        <i className="fas fa-wrench icone"></i>
        <Card.Content extra>
          <Card.Header>EDITAR DISCIPLINA</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
