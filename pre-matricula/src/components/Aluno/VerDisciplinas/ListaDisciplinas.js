import React from 'react';
import ItemDisciplina from './ItemDisciplina';
import {Table} from 'semantic-ui-react';

import '../Aluno.css';
const DESORDENADO = 2;

export default class ListaDisciplinas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplinas: [

      ]
    }
    this.getOrdenadoNome = this.getOrdenadoNome.bind(this);
  }
  componentWillMount(){
      fetch("https://prematricula-ufcg.herokuapp.com/api/disciplinas",{
        method: "GET"
      })
      .then(r => r.json())
      .then(r => {this.setState({disciplinas : r})})
  }

  getOrdenadoNome = function(){
    return this.state.disciplinas
    .sort(function(a,b){
                          if(a.nome > b.nome) return 1;
                          if(a.nome < b.nome) return -1;
                          return 0;
                  })
    .filter((a) => a.periodo == this.props.periodo || this.props.periodo == 11)
    .map((a) => <ItemDisciplina info={a}/>)
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
            <Table.HeaderCell>PERIODO</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
      {this.props.filtro == DESORDENADO ?
        this.state.disciplinas
          .filter((a) => a.periodo == this.props.periodo || this.props.periodo == 11)
          .map((a) => <ItemDisciplina info={a}/>)
    : this.getOrdenadoNome()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
