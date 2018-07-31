import React from 'react';
import {Menu, Button} from 'semantic-ui-react';

import "../Aluno.css";
var space = " "
export default class Footer extends React.Component {
  render() {
    return(
        <Menu borderless className="footer inverted" id="footerMatricula">
          <Menu.Item>TOTAL DE CRÉDITOS: {this.props.numCreditos} </Menu.Item>
          <Menu.Item> {(this.props.numCreditos > 24 || this.props.numCreditos < 16) ? <div>  <i className="fas fa-exclamation-triangle"></i> É necessário ter entre 16 e 24 créditos <i className="fas fa-exclamation-triangle"></i> </div>: <i className="fas fa-check-circle"></i>}</Menu.Item>
          <Menu.Menu className="right">
          <Menu.Item ><Button primary onClick={(e) => {this.props.sendPreMatricula(e);}}>FAZER PRÉ-MATRÍCULA</Button></Menu.Item>
          <Menu.Item ><Button onClick={(e) => {this.props.unselectAll(e);}}>CANCELAR</Button></Menu.Item>
          </Menu.Menu>
        </Menu>
    )
  }
}
