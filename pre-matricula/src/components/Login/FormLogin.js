import React from 'react';
import {Form, Dropdown} from 'semantic-ui-react';

let

export default class FormLogin extends React.Component {
  state = {
    opcoesDropdown: {
      {text:'Aluno', value: 'Aluno'},
      {text: 'Professor',value: 'Professor'}
    }
  }


  render() {
    const {opcoesDropdown} = this.state;
    return (
      <Form>
        <p/>
        <Form.Field>
          <Dropdown placeholder="Aluno ou Coordenador?" fluid selection options={opcoesDropdown}/>
        </Form.Field>

        <Form.Field>
          <label>E-mail institucional</label>
          <input placeholder='seu.email@ccc.ufcg.edu.br' />
        </Form.Field>

        <Form.Field>
          <label>Senha</label>
          <input placeholder='senha' />
        </Form.Field>

      </Form>
    )
  }

}
