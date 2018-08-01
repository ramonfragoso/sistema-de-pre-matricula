import React from 'react';
import {Table} from 'semantic-ui-react';
import '../../Aluno/Aluno.css';


export default class ItemPreMatricula extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <Table.Row>
        <Table.Cell>{this.props.info.matricula}</Table.Cell>
        <Table.Cell singleLine>{this.props.info.nome}</Table.Cell>
        <Table.Cell>{this.props.info.email}</Table.Cell>
        <Table.Cell>{this.props.info.disciplinas}</Table.Cell>
      </Table.Row>

    )
  }
}
