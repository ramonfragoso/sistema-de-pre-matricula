import React from 'react';
import {Divider, Header, Container, Grid} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';
import RealizarPreMatriculaBox from './RealizarPreMatriculaBox';
import { Route, Redirect, Link } from 'react-router-dom'
import VerDisciplinasBox from './VerDisciplinasBox';




export default class Aluno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

componentWillMount(){
  let email = localStorage.getItem("emailSessao")
  if(email == null || email == " "){ email = " " }
  fetch("https://prematricula-ufcg.herokuapp.com/api/alunos")
  .then(r =>  r.json())
  .then(r => {
    let retorno = false;
    console.log(r)
    for(let item of r){
      if(item.email == email){
        retorno = true;
        console.log("achou");
      }
    }
    return retorno
  }).then(r => {
    if(!r) {
      this.setState({redirect: true})
      }
    else this.setState({redirect: false})
    })

}
render(){
  return(
      <div className="topo">
        {this.state.redirect ? <Redirect to="/primeirocadastro"/> : <div></div>}
        <FixedNavbar handleLogout={this.props.handleLogout}/>
        <Container>
          <Grid>
            <Grid.Row className="logadoText">
              <Header>
                Seja bem vindo Aluno, aqui você pode escolher entre fazer sua matrícula ou ver as disciplinas disponíveis.
                <Link to="/editarlogin"> Clique aqui </Link> para editar seu login.
              </Header>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column align="center">
                <RealizarPreMatriculaBox />
              </Grid.Column>
              <Grid.Column align="center">
                <VerDisciplinasBox/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>)
}
}
