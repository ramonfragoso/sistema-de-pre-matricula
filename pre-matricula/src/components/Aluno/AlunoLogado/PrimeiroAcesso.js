import React from 'react';
import { Redirect} from 'react-router-dom';

import {Modal, Button, Input, Form} from 'semantic-ui-react';

import '../../Aluno/Aluno.css';
export default class ListaDisciplinas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      matricula: "",
      open: true
    }
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
      {this.state.matricula == "" ?
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
        <Modal.Header><h2>Primeiro Acesso</h2></Modal.Header>
        <Modal.Actions>
          <h3><p>Sendo esse seu primeiro acesso, é necessário que
           você nos informe sua matrícula.</p>
           <p>Você pode mudar ela a qualquer momento no canto superior direito da tela</p></h3>
          <br/>
          <Form>
          <Form.Field
            control={Input}
            label='Matrícula'
            onChange={this.onChange}
            value={this.state.matricula}
            name="creditos"/>
          <Form.Field
            control={Button}
            onClick={this.close}
            positive
            labelPosition='right'
            icon='checkmark'
            content='Enviar'
            >Enviar</Form.Field>
          </Form>
          <br/>
        </Modal.Actions>
        </Modal>
        : <Redirect to='/home'/>}
      </div>
    )
  }
}
