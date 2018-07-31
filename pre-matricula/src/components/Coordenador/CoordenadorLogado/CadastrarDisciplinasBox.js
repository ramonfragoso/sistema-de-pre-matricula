import React from 'react';
import {Card} from 'semantic-ui-react';
import '../../Aluno/Aluno.css';
import { Route, Redirect } from 'react-router-dom'

export default class CadastrarDisciplinasBox extends React.Component {
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
        <i className="far fa-file-alt icone"></i>
        <Card.Content extra>
          <Card.Header>CADASTRAR DISCIPLINA</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
