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
        <Table.Cell>{this.props.info[0]}</Table.Cell>
        <Table.Cell singleLine>{this.props.info[1]}</Table.Cell>
        <Table.Cell>{this.props.info[2]}</Table.Cell>
        <Table.Cell>{this.props.info[3]}</Table.Cell>
      </Table.Row>

    )
  }
}
