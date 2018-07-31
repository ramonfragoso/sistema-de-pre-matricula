import React from 'react';
import {Route, Router} from 'react-router-dom';
import {Form, Input, Radio, Button} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';

import '../../Aluno/Aluno.css';

// nome da disciplina, código, nº de créditos, carga horária e se é ofertada na grade nova/antiga/ambas.

export default class FormDisciplina extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        nome:"",
        codigo: this.props.codigo,
        creditos:"",
        horas:"",
        tipo: ""


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
    let json = {
      nome: this.state.nome,
      codigo: this.state.codigo,
      horas: this.state.horas,
      creditos: this.state.creditos,
      tipo: this.state.tipo
    }
    console.log(json);
    this.setState({nome:"",
    codigo: this.props.codigo,
    creditos:"",
    horas:"",
    tipo: ""})


  }

  onSubmitClick(e){
    e.preventDefault;
    let json = {
      nome: this.state.nome,
      codigo: this.state.codigo,
      horas: this.state.horas,
      creditos: this.state.creditos,
      tipo: this.state.tipo
    }
    console.log(json);
    this.setState({nome:"",
    codigo:"",
    creditos:"",
    horas:"",
    tipo: ""})


  }

  render() {


    return(
      <Form>
        <Form.Group widths='equal'>
        <Form.Field
        control={Input}
        label='Nome da Disciplina'
        placeholder='Ex.: Laboratório de Programação 1'
        name="nome"
        value={this.state.nome}
        onChange={this.onChange}/>
        <Form.Field control={Input} label='Código' value={this.props.codigo} />
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Field control={Input} label='Número de Créditos' onChange={this.onChange} value={this.state.creditos} name="creditos" placeholder='Ex.: 4' />
        <Form.Field control={Input} label='Quantidade de Horas' onChange={this.onChange} value={this.state.horas} name="horas" placeholder='Ex.: 60' />
        </Form.Group>
        <br/>
        <Form.Group inline>
        <label>Grade</label>
        <Form.Field>
            <Radio
              label='Ambas'
              name='tipo'
              value="Ambas"
              checked={this.state.tipo == 'Ambas'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
              <Radio
                label='Novo'
                name='tipo'
                value="Novo"
                checked={this.state.tipo == 'Novo'}
                onChange={this.handleChange}
              />
            </Form.Field>
          <Form.Field>
            <Radio
              label='Antigo'
              name='tipo'
              value="Antigo"
              checked={this.state.tipo == 'Antigo'}
              onChange={this.handleChange}
            />
          </Form.Field>
      </Form.Group>
      <br/>
      <Form.Field control={Button} color="linkedin" onClick={this.onSubmitClick}>Editar</Form.Field>
      </Form>
    )
  }
}
