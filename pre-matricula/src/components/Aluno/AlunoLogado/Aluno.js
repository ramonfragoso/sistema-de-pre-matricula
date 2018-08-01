import React from 'react';
import {Divider, Header, Container, Grid} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';
import RealizarPreMatriculaBox from './RealizarPreMatriculaBox';
import { Route, Redirect } from 'react-router-dom'
import VerDisciplinasBox from './VerDisciplinasBox';




export default class Aluno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

componentDidMount(){
  let email = localStorage.getItem("emailSessao")
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
  console.log(emailFinal)
  fetch(`https://prematricula-ufcg.herokuapp.com/api/alunos/${emailFinal}`)
  .then(r => r.json())
  .catch(error => {this.setState({redirect: true}); console.log("heh")})
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
