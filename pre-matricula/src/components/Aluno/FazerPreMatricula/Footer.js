import React from 'react';
import {Menu, Button} from 'semantic-ui-react';

import "../Aluno.css";


export default class Footer extends React.Component {

  render() {
    return(
        <Menu borderless className="footer inverted" id="footerMatricula">
          <Menu.Item>TOTAL DE CRÉDITOS: N_CRED</Menu.Item>
          <Menu.Menu className="right">
          <Menu.Item ><Button>FAZER PRÉ-MATRÍCULA</Button></Menu.Item>
          <Menu.Item ><Button primary>CANCELAR</Button></Menu.Item>
          </Menu.Menu>
        </Menu>
    )
  }
}
