import React from 'react';
import FixedNavbar from '../../FixedNavbar';
import RealizarPreMatriculaBox from './RealizarPreMatriculaBox';
import VerDisciplinasBox from './VerDisciplinasBox';
import VerDisciplinas from '../VerDisciplinas/VerDisciplinas';
import FazerPreMatricula from '../FazerPreMatricula/FazerPreMatricula';
import { Route } from 'react-router-dom';
import Aluno from './Aluno';
import '../Aluno.css';
import PrimeiroAcesso from './PrimeiroAcesso'

export default class AlunoHomepage extends React.Component {

  render() {
    return(
      <div>
      <Route path="/disciplinas" exact render={ () => <VerDisciplinas  handleLogout={this.props.handleLogout}/>}/>
      <Route path="/matricula" exact render={ () => <FazerPreMatricula  handleLogout={this.props.handleLogout}/>}/>
      <Route path="/home" exact render={ () => <Aluno handleLogout={this.props.handleLogout}/>}/>
      <Route path="/" exact render={ () => <Aluno handleLogout={this.props.handleLogout}/>}/>
      <Route path="/primeirocadastro" exact render={ () => <PrimeiroAcesso/>}/>
      </div>
    )
  }


}
