import React from 'react';
import {Grid, Label} from 'semantic-ui-react';
import DisciplinaBox from './DisciplinaBox';
import Coluna from './Coluna';

import '../Aluno.css';

export default class Periodos extends React.Component {

  render() {
    return(
        <Grid columns={this.props.disciplinas.length} padded>
          {this.props.disciplinas.map((a,b) => <Coluna disc={a} cIndex={b} handleSelect={this.props.handleSelect} /> )}

        </Grid>

    )
  }
}
