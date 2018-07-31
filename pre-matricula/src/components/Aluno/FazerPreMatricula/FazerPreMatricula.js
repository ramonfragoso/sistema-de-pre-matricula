
import React from 'react';
import Disciplinas from './Disciplinas';
import FixedNavbar from '../../FixedNavbar';
import Footer from './Footer';

import '../Aluno.css';


export default class VerDisciplinasBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplinas: [
        [["lp1",false,1],["p1",false,2], ["c1",false,3]]
        ,[["c2",false,4], ["lp2",false,5], ["discreta",false,6]]
        ,[["eda",false,7],["leda",false,8],["prob",false,9]]
        ,[["psoft",false,10],["logica", false,11]]
        ,[],[],[],[],[],[]
      ],
      creditos: 0
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.setAllUnselected = this.setAllUnselected.bind(this);
    this.updateCreditos = this.updateCreditos.bind(this);
    this.sendPreMatricula = this.sendPreMatricula.bind(this);
  }

  setAllUnselected(e){
    e.preventDefault();
    let disc = this.state.disciplinas;
    for(let coluna of disc){
      for(let disciplina of coluna){
        disciplina[1] = false;
       }
    }
    this.setState({disciplinas: disc});
  }

  handleSelect(e,c,l){
    let disc = this.state.disciplinas;
    disc[c][l][1] = !disc[c][l][1];
    this.setState({disciplinas: disc});
    if(disc[c][l][1] == true) this.updateCreditos(e, disc[c][l][2])
    else this.updateCreditos(e, -disc[c][l][2])
  }

  updateCreditos(e,credito){
    e.preventDefault();
    this.setState({creditos: this.state.creditos + credito})

  }
  sendPreMatricula(e){
    if(this.state.creditos > 15 && this.state.creditos < 25){
    e.preventDefault();
    let disciplinas = this.state.disciplinas;
    let enviadas=[]
    for(let coluna of disciplinas){
      for(let disciplina of coluna){
        if(disciplina[1]) enviadas.push(disciplina[0]);
       }
    }
    console.log(enviadas);
  }
  }

  render() {
    return(
      <div className="topopre">
        <FixedNavbar handleClick={this.props.handleClick} handleLogout={this.props.handleLogout}/>
        <Disciplinas handleSelect={this.handleSelect} disciplinas={this.state.disciplinas}/>
        <Footer numCreditos={this.state.creditos} unselectAll={this.setAllUnselected} sendPreMatricula={this.sendPreMatricula}/>
      </div>
    )
  }
}
