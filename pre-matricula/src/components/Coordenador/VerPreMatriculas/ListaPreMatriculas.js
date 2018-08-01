import React from 'react';
import {Table} from 'semantic-ui-react';
import ItemPreMatricula from './ItemPreMatricula';

import '../../Aluno/Aluno.css';
const DESORDENADO = 2;

export default class ListaDisciplinas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <Table celled padded>
      <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Matrícula</Table.HeaderCell>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Disciplinas</Table.HeaderCell>
            </Table.Row>
      </Table.Header >
      {this.props.alunos
          .map((a) => <ItemPreMatricula info={a}/>)
      }
      </Table>
    )
  }
}
