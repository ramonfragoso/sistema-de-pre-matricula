import React from 'react';
import {Route, Router} from 'react-router';
import {Divider, Header, Container, Grid} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';
import RealizarPreMatriculaBox from './RealizarPreMatriculaBox';
import VerDisciplinasBox from './VerDisciplinasBox';
import VerDisciplinas from '../VerDisciplinas/VerDisciplinas';
import FazerPreMatricula from '../FazerPreMatricula/FazerPreMatricula';
import '../Aluno.css';

export default class AlunoHomepage extends React.Component {

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
                Seja bem vindo Ramon, aqui você pode escolher entre fazer sua matrícula ou ver as disciplinas disponíveis. No topo da página pode ver se há notificações ou sair da página.
              </Header>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column align="center">
                <RealizarPreMatriculaBox handleClick={this.handleClick}/>
              </Grid.Column>
              <Grid.Column align="center">
                <VerDisciplinasBox handleClick={this.handleClick}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>)
      :
      (this.state.page == "disciplinas" ? <div> <VerDisciplinas handleClick={this.handleClick} handleLogout={this.props.handleLogout}/> </div> : <div><FazerPreMatricula handleClick={this.handleClick} handleLogout={this.props.handleLogout}/> </div>)
    )
  }


}
