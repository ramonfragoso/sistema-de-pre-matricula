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
        [["lp1",false,1],["p1",false,2], ["c1",false,3]]
        ,[["c2",false,4], ["lp2",false,5], ["discreta",false,6]]
        ,[["eda",false,7],["leda",false,8],["prob",false,9]]
        ,[["psoft",false,10],["logica", false,11]]
        ,[],[],[],[],[],[]
      ]
    }
    this.handleSelect = this.handleSelect.bind(this);
  }


  handleSelect(e,c,l){
    let disc = this.state.disciplinas;
    disc[c][l][1] = !disc[c][l][1];
    this.setState({disciplinas: disc});
    if(disc[c][l][1] == true) this.props.updateCreditos(e, disc[c][l][2])
    else  this.props.updateCreditos(e, -disc[c][l][2])
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
