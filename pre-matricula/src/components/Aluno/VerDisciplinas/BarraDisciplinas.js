import React from 'react';
import {Menu, Divider} from 'semantic-ui-react';


import '../Aluno.css';


export default class BarraDisciplinas extends React.Component {


  render() {
    return(
      <Menu borderless inverted>
        <Menu.Item>CODIGO</Menu.Item>
        <Menu.Item>NOME</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>CRÉDITOS</Menu.Item>
          <Menu.Item>VAGAS</Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
