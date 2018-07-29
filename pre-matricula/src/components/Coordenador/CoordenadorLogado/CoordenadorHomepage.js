import React from 'react';
import {Route, Router} from 'react-router';
import {Divider, Header, Container, Grid} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';
import VerPreMatriculasBox from './VerPreMatriculasBox';
import EditarDisciplinasBox from './EditarDisciplinasBox';
import CadastrarDisciplinasBox from './CadastrarDisciplinasBox';
import CadastrarDisciplina from '../CadastrarDisciplina/CadastrarDisciplina';
import '../../Aluno/Aluno.css';

export default class CoordenadorHomepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(futurePage, event){
    event.preventDefault();
    this.setState({page: futurePage})
  }
  render() {
    return(
      this.state.page == "home" ?(
      <div className="topo">
        <FixedNavbar handleClick={this.handleClick} handleLogout={this.props.handleLogout}/>
        <Container>
          <Grid>
            <Grid.Row className="logadoText">
              <Header>
                Seja bem vindo Coordenador, aqui você pode escolher entre fazer sua matrícula ou ver as disciplinas disponíveis. No topo da página pode ver se há notificações ou sair da página.
              </Header>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column align="center">
                <VerPreMatriculasBox handleClick={this.handleClick}/>
              </Grid.Column>
              <Grid.Column align="center">
                <CadastrarDisciplinasBox handleClick={this.handleClick}/>
              </Grid.Column>
              <Grid.Column align="center">
                <EditarDisciplinasBox handleClick={this.handleClick}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>)
      :
      (this.state.page == "cadastrar" ? <div> <CadastrarDisciplina handleClick={this.handleClick} handleLogout={this.props.handleLogout}/> </div> : <div><VerPreMatriculasBox handleClick={this.handleClick} handleLogout={this.props.handleLogout}/> </div>)
    )
  }


}
