import React from 'react';
import {Table} from 'semantic-ui-react';
import ItemPreMatricula from './ItemPreMatricula';

import '../../Aluno/Aluno.css';
const DESORDENADO = 2;

export default class ListaDisciplinas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [["116210412","José Ramon","jose.ramon@ccc.ufcg.edu.br","Laboratorio de progração 1, programação 1, calculo1, matematica discreta, estruturas de dados e algoritmos, projeto de software, teoria dos grafos, teoria da computation"],
                ["112254436","Huggo abobati","adobati@ccc.ufcg.edu.br","p2, p2, , c3"],
                ["2222222","Arimatei junior","arizin@ccc.ufcg.edu.br","lp1, , c2, c3"],
                ["5678899","felipe fecto","filipe@ccc.ufcg.edu.br","lp1, c1, c2, sla"],
                ["3354322","van lacerdi","vinicin@ccc.ufcg.edu.br","lp1, , calculo 10, c3"]]
    }
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
      {this.state.alunos
          .map((a) => <ItemPreMatricula info={a}/>)
      }
      </Table>
    )
  }
}
