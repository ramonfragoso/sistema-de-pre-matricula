import React from 'react';
import {Item, Grid, Table} from 'semantic-ui-react';

import '../Aluno.css';


export default class ItemDisciplina extends React.Component {


  render() {
    return(

          <Table.Row>
            <Table.Cell>{this.props.info.codigo}</Table.Cell>
            <Table.Cell>{this.props.info.nome}</Table.Cell>
            <Table.Cell>{this.props.info.qtdCreditos}</Table.Cell>
            <Table.Cell>{this.props.info.periodo}</Table.Cell>
          </Table.Row>

    )
  }
}
