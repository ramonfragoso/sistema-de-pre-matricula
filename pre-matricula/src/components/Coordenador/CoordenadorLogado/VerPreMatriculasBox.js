import {Redirect } from 'react-router-dom'
import React from 'react';
import {Card} from 'semantic-ui-react';
import '../../Aluno/Aluno.css';

export default class VerPreMatriculasBox extends React.Component {
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
      return <Redirect to='/prematriculas'/>
    }
  }
  render() {

    return(
      <Card onClick={this.setRedirect}>
        {this.renderRedirect()}
        <i className="fas fa-users icone"></i>
        <Card.Content extra>
          <Card.Header>VER PRÉ-MATRÍCULAS</Card.Header>
        </Card.Content>
      </Card>

    )
  }
}
