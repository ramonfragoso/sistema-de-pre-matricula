import React from 'react';
import ItemDisciplinaEditar from './ItemDisciplinaEditar';
import {Table} from 'semantic-ui-react';

import '../../Aluno/Aluno.css';
const DESORDENADO = 2;

export default class ListaDisciplinas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplinas: [["21321","lp1","4","50","1"], ["12315","p1","4","50","1"], ["213156","c1","4","60","1"], ["1231244","grafos","4","30","2"],["15641","discreta","4","40","2"]]
    }
    this.getOrdenadoNome = this.getOrdenadoNome.bind(this);
  }
  getOrdenado
  getOrdenadoNome = function(){
    return this.state.disciplinas
    .sort(function(a,b){
                          if(a[1] > b[1]) return 1;
                          if(a[1] > b[1]) return -1;
                          return 0;
                  })
    .filter((a) => a[4] == this.props.periodo || this.props.periodo == 11)
    .map((a) => <ItemDisciplinaEditar info={a}/>)
  }


  render() {

    return(
      <div>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>CODIGO</Table.HeaderCell>
            <Table.HeaderCell>NOME</Table.HeaderCell>
            <Table.HeaderCell>CRÉDITOS</Table.HeaderCell>
            <Table.HeaderCell>VAGAS</Table.HeaderCell>
            <Table.HeaderCell>EDITAR</Table.HeaderCell>
            <Table.HeaderCell>DELETAR</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
      {this.props.filtro == DESORDENADO ?
        this.state.disciplinas
          .filter((a) => a[4] == this.props.periodo || this.props.periodo == 11)
          .map((a) => <ItemDisciplinaEditar info={a} link={a[0]}/>)
    : this.getOrdenadoNome()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
