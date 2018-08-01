import React from 'react';
import {Item, Grid, Table} from 'semantic-ui-react';
import { Route, Redirect } from 'react-router-dom'
import '../../Aluno/Aluno.css';

export default class ItemDisciplina extends React.Component {
    state = {
      redirect: false
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    renderRedirect = () => {
      let link = '/editar/' + this.props.link
      if (this.state.redirect) {
        return <Redirect to={link}/>
      }
    }

  render() {
    return(

          <Table.Row>
            {this.renderRedirect()}
            <Table.Cell>{this.props.info.codigo}</Table.Cell>
            <Table.Cell>{this.props.info.nome}</Table.Cell>
            <Table.Cell>{this.props.info.qtdCreditos}</Table.Cell>
            <Table.Cell>{this.props.info.periodo}</Table.Cell>
            <Table.Cell><i className="fas fa-clipboard-list"  onClick={this.setRedirect}></i></Table.Cell>
            <Table.Cell><i className="far fa-times-circle"></i></Table.Cell>
          </Table.Row>

    )
  }
}
