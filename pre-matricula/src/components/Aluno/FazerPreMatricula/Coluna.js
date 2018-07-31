import React from 'react';
import {Grid, Label} from 'semantic-ui-react';
import DisciplinaBox from './DisciplinaBox';
import '../Aluno.css';
export default class Periodos extends React.Component {
  render(){
    return(
      <Grid.Column className="periodo">
      <div className="boxDisciplina" style={{backgroundColor: "#002a6d"}}>
        <div className="content"> <h4> {this.props.cIndex < 9 ? this.props.cIndex + 1 + "°  Periodo" : "Optativas"}  </h4>
        </div>
      </div>
        {this.props.disc.map((a,b) => <DisciplinaBox name={a[0]} selected={a[1]} lIndex={b} cIndex={this.props.cIndex} handleSelect={this.props.handleSelect}/>)}
        <Grid.Row>
        </Grid.Row>
      </Grid.Column>
    )
  }
}
