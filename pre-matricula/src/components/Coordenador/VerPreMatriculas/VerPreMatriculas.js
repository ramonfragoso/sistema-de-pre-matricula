import React from 'react';
import FixedNavbar from '../../FixedNavbar';
import {Container, Header, Divider, Table, Button, Grid} from 'semantic-ui-react';
import ListaPreMatriculas from './ListaPreMatriculas';

import '../../Aluno/Aluno.css';

export default class VerPreMatriculas extends React.Component {
  constructor(props) {
    super(props);
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
          <ListaPreMatriculas/>
          <br/>
        </Container>
      </div>
    )
  }
}
