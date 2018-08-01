import React from 'react';
import { Redirect} from 'react-router-dom';

import {Modal, Button, Input, Form, Radio} from 'semantic-ui-react';

import '../../Aluno/Aluno.css';
export default class ListaDisciplinas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      matricula: "",
      nome:"",
      tipoGrade:"",
      email: localStorage.getItem("emailSessao"),
      redirect: false,
      open: true
    }
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
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

  handleSubmit = e => {
    e.preventDefault();
    var jsn = {
      "email": this.state.email,
      "matricula": this.state.matricula,
      "nome": this.state.nome,
      "grade": this.state.tipoGrade
    }
    let email = this.state.email;
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
    fetch(`https://prematricula-ufcg.herokuapp.com/api/alunos/${emailFinal}`,{
      method: "PUT",
      body: JSON.stringify(jsn),
      headers:{
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      }
    }).then(setTimeout(() => this.setState({redirect: true}),200))
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
        <Modal.Header><h2>Primeiro Acesso</h2></Modal.Header>
        <Modal.Actions>
          <h3><p>Edite suas informacoes aqui</p></h3>
          <br/>
          <Form>
          <Form.Field
            control={Input}
            label='Nome*'
            onChange={this.onChange}
            value={this.state.nome}
            name="nome"/>
          <Form.Field
            control={Input}
            label='Matrícula*'
            onChange={this.onChange}
            value={this.state.matricula}
            name="matricula"/>
          <Form.Group inline>
          <label>Grade*:</label>
          <Form.Field>
            <Radio
              label='Antiga'
              name='tipoGrade'
              value="ANTIGA"
              checked={this.state.tipoGrade == 'ANTIGA'}
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
            </Form.Group>




          <Form.Field
            control={Button}
            onClick={this.handleSubmit}
            positive
            labelPosition='right'
            icon='checkmark'
            content='Enviar'
            >Enviar</Form.Field>
          </Form>
          <br/>
        </Modal.Actions>
        </Modal>
        {this.state.redirect ? <Redirect to="/home"/> :<div></div>}
      </div>
    )
  }
}
