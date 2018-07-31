import React from 'react';
import {Card} from 'semantic-ui-react';
import '../Aluno.css';
import { Route, Redirect } from 'react-router'

export default class VerDisciplinasBox extends React.Component {
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
      return <Redirect to='/disciplinas'/>
    }
  }
  render() {

    return(
      <Card onClick={this.setRedirect}>
      {this.renderRedirect()}
        <i className="fas fa-graduation-cap icone"></i>
        <Card.Content extra>
          <Card.Header>VER DISCIPLINAS</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
