
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
                      [
                        // {
                        //   alunos: [],
                        //   codigo: "p1",
                        //   periodo: 1,
                        //   qtdCreditos: 1,
                        //   tipoDisciplina: "OBRIGATORIA",
                        //   tipoGrande: "NOVA"
                        //   SAMPLE
                        //
                        // }
                      ]
                    ],
      creditos: 0
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.setAllUnselected = this.setAllUnselected.bind(this);
    this.updateCreditos = this.updateCreditos.bind(this);
    this.sendPreMatricula = this.sendPreMatricula.bind(this);
  }

  componentWillMount(){
    let email = localStorage.getItem("emailSessao")
    if(email == null) email = "!!!!!!!!!!!!!!!!!!"
    let emailFinal = "";
    for (let caractere of email){
      if (caractere == "@"){
        break;
        }
      else if (caractere == ".") {
        emailFinal += "_"
        }
      else {
        emailFinal += caractere
      }
    }
    fetch(`https://prematricula-ufcg.herokuapp.com/api/alunos/${emailFinal}`)
    .then(r => r.json())
    .then(r => r.grade)
    .then( j =>{
      console.log(j)
    fetch("https://prematricula-ufcg.herokuapp.com/api/disciplinas",{
      method: "GET"
    })
    .then(r => r.json())
    .then(
      r => {
      let newDisc = [[],[],[],[],[],[],[],[],[],[]];
      for(let disciplina of r){
        disciplina.selected = false;
        if(disciplina.periodo != 0){
          if(disciplina.tipoGrade == j || disciplina.tipoGrade == "AMBAS"){
          newDisc[disciplina.periodo-1].push(disciplina);}
        }
        else {
          if(disciplina.tipoGrade == j || disciplina.tipoGrade == "AMBAS") newDisc[9].push(disciplina);
        }
      }
      return newDisc
    })
    .then(r => {this.setState({
      disciplinas: r
    })
    console.log(r)}
  )}).catch(error => console.log(error))
  }

  setAllUnselected(e){
    e.preventDefault();
    let disc = this.state.disciplinas;
    for(let coluna of disc){
      for(let disciplina of coluna){
        disciplina.selected = false;
       }
    }
    this.setState({disciplinas: disc});
  }


  handleSelect(e,c,l){
    let disc = this.state.disciplinas;
    disc[c][l].selected = !disc[c][l].selected;
    this.setState({disciplinas: disc});
    if(disc[c][l].selected == true) this.updateCreditos(e, disc[c][l].qtdCreditos)
    else this.updateCreditos(e, -disc[c][l].qtdCreditos)
  }

  updateCreditos(e,credito){
    e.preventDefault();
    this.setState({creditos: this.state.creditos + credito})

  }
  sendPreMatricula(e){
    if(this.state.creditos > 15 && this.state.creditos < 25){
      e.preventDefault();
      let disciplinas = this.state.disciplinas;
      let enviadas=[];
      for(let coluna of disciplinas){
        for(let disciplina of coluna){
          if(disciplina.selected) enviadas.push(disciplina.codigo);
         }
      }
      let email = localStorage.getItem("emailSessao")
      let emailFinal = "";
      for (let caractere of email){
        if (caractere == "@"){
          break;
          }
        else if (caractere == ".") {
          emailFinal += "_"
          }
        else {
          emailFinal += caractere
        }
      }
      let corpo = {
        codigos: enviadas
      }
      console.log(enviadas)
      console.log(emailFinal)
      fetch(`https://prematricula-ufcg.herokuapp.com/api/alunos/hugo_galvao/disciplinas`,{
        method: "POST",
        body: JSON.stringify(corpo),
        headers:{
          "Content-Type": "application/json"
        }
      })

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
