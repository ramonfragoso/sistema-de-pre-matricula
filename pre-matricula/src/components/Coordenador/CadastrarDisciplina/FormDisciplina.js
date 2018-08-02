import React from 'react';
import {Route, Router, Redirect} from 'react-router';
import {Form, Input, Radio, Button} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';

import '../../Aluno/Aluno.css';

// nome da disciplina, código, nº de créditos, carga horária e se é ofertada na grade nova/antiga/ambas.

export default class FormDisciplina extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        nome:"",
        codigo:"",
        qtdCreditos:"",
        periodo:"",
        tipoGrade: "",
        redirect: false

    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }
handleChange = (e,value) => {
  e.preventDefault();
  this.setState({...this.state, [value.name]: value.value})
}

  onChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    })
  }
  onSubmit(){
    var json = {
      "nome": this.state.nome,
      "codigo": this.state.codigo,
      "periodo": parseInt(this.state.periodo),
      "qtdCreditos": parseInt(this.state.qtdCreditos),
      "tipoGrade": this.state.tipoGrade,
      "coordenadorEmail": "emailtestepsoft@gmail.com"
    };
    fetch("https://prematricula-ufcg.herokuapp.com/api/disciplinas",{
      method: "POST",
      body: JSON.stringify(json),
      headers:{
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      }
    })
    .then(this.setState({"nome": "",
    "codigo":"",
    "periodo": "",
    "qtdCreditos": "",
    "tipoGrade": "",
    "tipoDisciplina": "",
    redirect: true})
  )


  }

  onSubmitClick(e){
    e.preventDefault;
    var jso = {
      "nome": this.state.nome,
      "codigo": this.state.codigo,
      "periodo": parseInt(this.state.periodo),
      "qtdCreditos": parseInt(this.state.qtdCreditos),
      "tipoGrade": this.state.tipoGrade,
      "coordenadorEmail": "emailtestepsoft@gmail.com"
    }
    fetch("https://prematricula-ufcg.herokuapp.com/api/disciplinas",{
      method: "POST",
      body: JSON.stringify(jso),
      headers:{
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      }
    })
    .then(this.setState({"nome": "",
    "codigo":"",
    "periodo": "",
    "qtdCreditos": "",
    "tipoGrade": "",
    "tipoDisciplina": "",
    redirect: true})
  )
}

  render() {


    return(
      <Form>
        {this.state.redirect ? <Redirect to="/home"/> : <div></div>}
        <Form.Group widths='equal'>
        <Form.Field
        control={Input}
        label='Nome da Disciplina'
        placeholder='Ex.: Laboratório de Programação 1'
        name="nome"
        value={this.state.nome}
        onChange={this.onChange}/>
        <Form.Field control={Input} label='Código' value={this.state.codigo} name="codigo" onChange={this.onChange} placeholder='Ex.: 2444356' />
        </Form.Group>
        <br/>
        <Form.Group widths='equal'>
        <Form.Field control={Input} label='Número de Créditos' onChange={this.onChange} value={this.state.qtdCreditos} name="qtdCreditos" placeholder='Ex.: 4' />
        <Form.Field control={Input} label='Período da Disciplina' onChange={this.onChange} value={this.state.periodo} name="periodo" placeholder='Ex.: 5, Obs.: 0 representa indefinido/opcional.' />
        </Form.Group>
        <br/>
        <Form.Group inline>
        <label>Grade</label>
        <Form.Field>
            <Radio
              label='Ambas'
              name='tipoGrade'
              value="AMBAS"
              checked={this.state.tipoGrade == 'AMBAS'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
              <Radio
                label='Novo'
                name='tipoGrade'
                value="NOVA"
                checked={this.state.tipoGrade == 'NOVA'}
                onChange={this.handleChange}
              />
            </Form.Field>
          <Form.Field>
            <Radio
              label='Antigo'
              name='tipoGrade'
              value="ANTIGA"
              checked={this.state.tipoGrade == 'ANTIGA'}
              onChange={this.handleChange}
            />
          </Form.Field>
      </Form.Group>
      <br/>
      <Form.Field control={Button} color="linkedin" onClick={this.onSubmitClick}>Cadastrar</Form.Field>
      </Form>
    )
  }
}
