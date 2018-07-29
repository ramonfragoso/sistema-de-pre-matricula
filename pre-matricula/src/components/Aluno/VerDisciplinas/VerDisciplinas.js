import React from 'react';
import FixedNavbar from '../FixedNavbar';
import BarraDisciplinas from './BarraDisciplinas';
import ListaDisciplinas from './ListaDisciplinas';
import {Container, Header, Divider, Dropdown, Grid} from 'semantic-ui-react';


import '../Aluno.css';


export default class VerDisciplinasBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      periodo: 11
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
    this.setState({periodo: e.target.value})
  }

  render() {
    return(
      <div className="topo">
        <FixedNavbar handleClick={this.props.handleClick} handleLogout={this.props.handleLogout}/>
        <Container>
          <Header><h1>Disciplinas</h1></Header>
          <Divider/>
          <Grid columns={2}>
            <Grid.Column>
              <h3>Listar disciplinas por</h3>
              <select className="ui dropdown listSelector" placeHolder="criterio">
                <option value="2">...</option>
                <option value="1">Nome</option>
                <option value="0">Numero</option>
              </select>
            </Grid.Column>
            <Grid.Column className="dropdownDisciplinas">
              <h3>Período</h3>
              <select className="ui dropdown listSelector" onChange={(e) => this.handleChange(e)}>
                <option value="11" selected="selected">Todos</option>
                <option value="10">Optativa</option>
                <option value="9">9°</option>
                <option value="8">8°</option>
                <option value="7">7°</option>
                <option value="6">6°</option>
                <option value="5">5°</option>
                <option value="4">4°</option>
                <option value="3">3°</option>
                <option value="2">2°</option>
                <option value="1">1°</option>
              </select>
            </Grid.Column>
          </Grid>
          <BarraDisciplinas/>
          <br/>
          <ListaDisciplinas periodo={this.state.periodo}/>
        </Container>
      </div>
    )
  }
}
