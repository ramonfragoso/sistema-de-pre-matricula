import React from 'react';
import {Divider, Header, Container, Grid} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';
import RealizarPreMatriculaBox from './RealizarPreMatriculaBox';
import { Route, Redirect } from 'react-router-dom'
import VerDisciplinasBox from './VerDisciplinasBox';

export default class Aluno extends React.Component {
render(){
  return(
      <div className="topo">
        <FixedNavbar handleLogout={this.props.handleLogout}/>
        <Container>
          <Grid>
            <Grid.Row className="logadoText">
              <Header>
                Seja bem vindo Ramon, aqui você pode escolher entre fazer sua matrícula ou ver as disciplinas disponíveis. No topo da página pode ver se há notificações ou sair da página.
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
