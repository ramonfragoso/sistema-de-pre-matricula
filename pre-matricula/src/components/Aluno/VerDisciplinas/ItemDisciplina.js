import React from 'react';
import {Item, Grid, Table} from 'semantic-ui-react';

import '../Aluno.css';


export default class ItemDisciplina extends React.Component {


  render() {
    return(

          <Table.Row>
            <Table.Cell>{this.props.info[0]}</Table.Cell>
            <Table.Cell>{this.props.info[1]}</Table.Cell>
            <Table.Cell>{this.props.info[2]}</Table.Cell>
            <Table.Cell>{this.props.info[3]}</Table.Cell>
          </Table.Row>

    )
  }
}
