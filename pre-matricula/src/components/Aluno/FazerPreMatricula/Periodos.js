import React from 'react';
import {Grid, Label} from 'semantic-ui-react';
import DisciplinaBox from './DisciplinaBox';
import Coluna from './Coluna';

import '../Aluno.css';

export default class Periodos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplinas: [
        [["lp1",false],["p1",false], ["c1",false]]
        ,[["c2",false], ["lp2",false], ["discreta",false]]
        ,[["eda",false],["leda",false],["prob",false]]
        ,[["psoft",false],["logica", false]]
        ,[],[],[],[],[],[]
      ]
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e,c,l){
    let disc = this.state.disciplinas;
    disc[c][l][1] = !disc[c][l][1];
    this.setState({disciplinas: disc});
    console.log(this.state.disciplinas);
  }

  render() {
    return(
        <Grid columns={this.state.disciplinas.length} padded>
          {this.state.disciplinas.map((a,b) => <Coluna disc={a} cIndex={b} handleSelect={this.handleSelect} /> )}

        </Grid>

    )
  }
}
