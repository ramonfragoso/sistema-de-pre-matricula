
import React from 'react';
import {Form, Dropdown} from 'semantic-ui-react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {Route, Link} from 'react-router-dom';
import AlunoHomepage from '../Aluno/AlunoLogado/AlunoHomepage';

export default class FormLogin extends React.Component {


  render() {
    const responseGoogleFail = (response) => {
      console.log(response);
    }
    const responseGoogle = (response) => {
      console.log(response);
      let email = response.w3.U3;
      fetch('https://prematricula-ufcg.herokuapp.com/api/alunos/', {
        method: "GET"
      })
      .then(r => r.json())
      .then(r => console.log(r))
      .catch(error => console.log)
      if(email.endsWith("ccc.ufcg.edu.br"))this.props.handleChange("Aluno",email);
      else this.props.handleChange("Coordenador",email);
    }

    return (
      <Form>
        <p/>
        <GoogleLogin
          clientId="707694176740-0gjiop7raf5h6n48ujtb0ldpp23tf0dr.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogleFail}
          className="fluid ui button primary"
        />
      </Form>
    )
  }

}
