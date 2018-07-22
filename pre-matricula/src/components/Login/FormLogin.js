import React from 'react';
import {Form, Dropdown} from 'semantic-ui-react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';



export default class FormLogin extends React.Component {


  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <Form>
        <p/>
        <Form.Field>
          <Dropdown placeholder="Aluno ou Coordenador?" fluid selection options={[{text:'Aluno', key:'a'}, {text:'Coordenador', key:'c'}]}/>
        </Form.Field>

        <GoogleLogin
          clientId="707694176740-0gjiop7raf5h6n48ujtb0ldpp23tf0dr.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          className="fluid ui button primary"
        />

      </Form>
    )
  }

}
