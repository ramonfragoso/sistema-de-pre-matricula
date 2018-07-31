import React from 'react';
import {Grid} from 'semantic-ui-react';
import Periodos from './Periodos';

import '../Aluno.css';


export default class Disciplinas extends React.Component {


  render() {
    return(
      <div>
          <Periodos handleSelect={this.props.handleSelect} disciplinas={this.props.disciplinas}/>
      </div>
    )
  }
}
