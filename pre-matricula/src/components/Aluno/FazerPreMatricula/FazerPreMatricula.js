
import React from 'react';
import Disciplinas from './Disciplinas';
import FixedNavbar from '../FixedNavbar';
import Footer from './Footer';

import '../Aluno.css';


export default class VerDisciplinasBox extends React.Component {


  render() {
    return(
      <div className="topopre">
        <FixedNavbar handleClick={this.props.handleClick} handleLogout={this.props.handleLogout}/>
        <Disciplinas/>
        <Footer/>
      </div>
    )
  }
}
