
import React from 'react';
import Disciplinas from './Disciplinas';
import FixedNavbar from '../../FixedNavbar';
import Footer from './Footer';

import '../Aluno.css';


export default class VerDisciplinasBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditos: 0
    }
    this.updateCreditos = this.updateCreditos.bind(this);
  }

  updateCreditos(e,credito){
    e.preventDefault();
    this.setState({creditos: this.state.creditos + credito})

  }

  render() {
    return(
      <div className="topopre">
        <FixedNavbar handleClick={this.props.handleClick} handleLogout={this.props.handleLogout}/>
        <Disciplinas updateCreditos={this.updateCreditos}/>
        <Footer numCreditos={this.state.creditos}/>
      </div>
    )
  }
}
