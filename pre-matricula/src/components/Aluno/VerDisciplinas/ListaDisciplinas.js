import React from 'react';
import ItemDisciplina from './ItemDisciplina';
import {} from 'semantic-ui-react';

import '../Aluno.css';


export default class ListaDisciplinas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplinas: [["21321","lp1","4","50","1"], ["12315","p1","4","50","1"], ["213156","c1","4","60","1"], ["1231244","grafos","4","30","2"],["15641","discreta","4","40","2"]]
    }
  }


  render() {
    return(
      <div>
      {this.state.disciplinas.filter((a) => a[4] == this.props.periodo || this.props.periodo == 11).map((a) => <ItemDisciplina info={a}/>)}
      </div>
    )
  }
}
