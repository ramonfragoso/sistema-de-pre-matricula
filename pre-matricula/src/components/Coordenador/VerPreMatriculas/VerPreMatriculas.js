import React from 'react';
import FixedNavbar from '../../FixedNavbar';
import {Container, Header, Divider, Table, Button, Grid} from 'semantic-ui-react';
import ListaPreMatriculas from './ListaPreMatriculas';
import ExportCSV from '../../../modules/exportCSV'

import '../../Aluno/Aluno.css';

export default class VerPreMatriculas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [
      ]
    }
  }
  componentWillMount(){
    fetch("https://prematricula-ufcg.herokuapp.com/api/alunos")
    .then(r => r.json())
    .then(r => {
      let promessas = []
      console.log(r)
      for(let aluno of r){
        let email = aluno.email;
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
        promessas.push(fetch(`https://prematricula-ufcg.herokuapp.com/api/alunos/${emailFinal}/disciplinas`)
        .then(r => r.json())
        .then(r => {
          return {
            ...aluno,
            "disciplinas": r
          }
        }));
      }
      Promise.all(promessas)
      .then(r => this.setState({"alunos": r}))
      // .then(r => console.log(r))
    }
  )


  }

  render() {
    return(
      <div className="topo">
        <FixedNavbar handleLogout={this.props.handleLogout}/>
        <Container>
          <Grid columns={2}>
          <Grid.Column><Header><h1>Pré-Matrículas</h1></Header></Grid.Column>
          <Grid.Column><Button color="linkedin" floated="right" onClick={() => ExportCSV.exportToCSV(this.state.alunos)}>Exportar CSV</Button></Grid.Column>
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
