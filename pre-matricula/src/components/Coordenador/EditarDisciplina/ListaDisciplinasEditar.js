import React from 'react';
import ItemDisciplinaEditar from './ItemDisciplinaEditar';
import {Table} from 'semantic-ui-react';

import '../../Aluno/Aluno.css';
const DESORDENADO = 2;
const ORDENADO_PERIODO = 3;

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
    .map((a) => <ItemDisciplinaEditar info={a} link={a.codigo}/>)
  }

  getOrdenadoPeriodo = function(){
    return this.state.disciplinas
    .sort(function(a,b){
                          if(a.periodo > b.periodo) return 1;
                          if(a.periodo < b.periodo) return -1;
                          return 0;
                  })
    .filter((a) => a.periodo == this.props.periodo || this.props.periodo == 11)
    .map((a) => <ItemDisciplinaEditar info={a} link={a.codigo}/>)
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
            <Table.HeaderCell>EDITAR</Table.HeaderCell>
            <Table.HeaderCell>DELETAR</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
      {this.props.filtro == DESORDENADO ?
        this.state.disciplinas
          .filter((a) => a.periodo == this.props.periodo || this.props.periodo == 11)
          .map((a) => <ItemDisciplinaEditar info={a} link={a.codigo}/>)
    : (this.props.filtro == ORDENADO_PERIODO ?  this.getOrdenadoPeriodo() : this.getOrdenadoNome())}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
