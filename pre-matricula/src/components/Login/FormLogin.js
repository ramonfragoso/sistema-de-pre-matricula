
import React from 'react';
import {Form, Dropdown} from 'semantic-ui-react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {Route, Link} from 'react-router';
import AlunoHomepage from '../Aluno/AlunoLogado/AlunoHomepage';

export default class FormLogin extends React.Component {


  render() {
    const responseGoogleFail = (response) => {
      console.log(response);
    }
    const responseGoogle = (response) => {
      console.log(response);
      let email = response.w3.U3;
      if(email.endsWith("ccc.ufcg.edu.br"))this.props.handleChange("Aluno");
      else this.props.handleChange("Coordenador");
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
