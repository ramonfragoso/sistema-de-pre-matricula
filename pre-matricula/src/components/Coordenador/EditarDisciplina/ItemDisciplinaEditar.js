import React from 'react';
import {Item, Grid, Table} from 'semantic-ui-react';
import { Route, Redirect } from 'react-router-dom'
import '../../Aluno/Aluno.css';

export default class ItemDisciplina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        redirect: false


    }
    this.handleDelete = this.handleDelete.bind(this)
  }
    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    handleDelete(e){
      e.preventDefault();
      fetch(`https://prematricula-ufcg.herokuapp.com/api/disciplinas/${this.props.link}`,{
        method: "DELETE"
      }
    ).catch(error => console.log(error))
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
            <Table.Cell><i className="far fa-times-circle" onClick={(e) => {this.handleDelete(e)}}></i></Table.Cell>
          </Table.Row>

    )
  }
}
