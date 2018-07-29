import React from 'react';
import {Route, Router} from 'react-router';
import {Form, Input, Radio, Button} from 'semantic-ui-react';
import FixedNavbar from '../../FixedNavbar';

import '../../Aluno/Aluno.css';

// nome da disciplina, código, nº de créditos, carga horária e se é ofertada na grade nova/antiga/ambas.

export default class FormDisciplina extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {

    const { value } = this.state

    return(
      <Form >
        <Form.Group widths='equal'>
        <Form.Field control={Input} label='Nome da Disciplina' placeholder='Ex.: Laboratório de Programação 1' />
        <Form.Field control={Input} label='Código' placeholder='Ex.: 2444356' />
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Field control={Input} label='Número de Créditos' placeholder='Ex.: 4' />
        <Form.Field control={Input} label='Quantidade de Horas' placeholder='Ex.: 60' />
        </Form.Group>
        <br/>
        <Form.Group inline>
        <label>Grade</label>
        <Form.Field
          control={Radio}
          label='Nova'
          value='1'
          checked={value === '1'}
          onChange={this.handleChange}
        />
        <Form.Field
          control={Radio}
          label='Antiga'
          value='2'
          checked={value === '2'}
          onChange={this.handleChange}
        />
        <Form.Field
          control={Radio}
          label='Ambas'
          value='3'
          checked={value === '3'}
          onChange={this.handleChange}
        />
      </Form.Group>
      <br/>
      <Form.Field control={Button} color="linkedin">Cadastrar</Form.Field>
      </Form>
    )
  }
}
