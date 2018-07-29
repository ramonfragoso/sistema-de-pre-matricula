import React from 'react';
import {Item, Grid} from 'semantic-ui-react';

import '../Aluno.css';


export default class ItemDisciplina extends React.Component {


  render() {
    return(
      <div>
      <Grid columns="equal" divided>
        <Grid.Row className="disciplina" color="blue">
          <Grid.Column width={2} textAlign="center">
          {this.props.info[0]}
          </Grid.Column>
          <Grid.Column width={12}>
          {this.props.info[1]}
          </Grid.Column>
          <Grid.Column width={1}>
          {this.props.info[2]}
          </Grid.Column>
          <Grid.Column width={1} >
          {this.props.info[3]}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}
