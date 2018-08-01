import React from 'react';
import FixedNavbar from '../../FixedNavbar';
import {Container, Header, Divider, Table, Button, Grid} from 'semantic-ui-react';
import ListaPreMatriculas from './ListaPreMatriculas';

import '../../Aluno/Aluno.css';

export default class VerPreMatriculas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: []
    }
  }
  componentWillMount(){
    fetch("https://prematricula-ufcg.herokuapp.com/api/alunos")
    .then(r => r.json())
    .then(r => {
      for(let aluno of r){
        let email = aluno.email
        let emailFinal = "";
        for (let caractere of email){
          if (caractere == "@"){
            break;
            }
          else if (caractere == ".") {
            emailFinal += "_"
            }
          else {
            emailFinal += caractere
          }
        }

        fetch(`https://prematricula-ufcg.herokuapp.com/api/alunos/${emailFinal}/disciplinas`)
        .then(resp => resp.json())
        .then(resp => {
          let arr = []
          for(let disciplina of resp){
            arr.push(disciplina.codigo)
          }
          aluno.disciplinas = arr;
          setTimeout(() => console.log(aluno), 1000);
        })



      }
      return r;
    }
    )
    .then(r => this.setState({alunos: r}))

  }

  render() {
    return(
      <div className="topo">
        <FixedNavbar handleLogout={this.props.handleLogout}/>
        <Container>
          <Grid columns={2}>
          <Grid.Column><Header><h1>Pré-Matrículas</h1></Header></Grid.Column>
          <Grid.Column><Button color="linkedin" floated="right">Exportar CSV</Button></Grid.Column>
          </Grid>
          <Divider/>
          <br/>
          <ListaPreMatriculas alunos={this.state.alunos}/>
          <br/>
        </Container>
      </div>
    )
  }
}
