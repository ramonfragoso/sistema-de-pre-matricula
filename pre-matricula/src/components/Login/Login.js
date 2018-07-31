import React from 'react';
import LoginBox from './LoginBox';
import {Route} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';

export default class Login extends React.Component {


  render() {
    return (
      <Grid columns={3} className="background">
        <Grid.Column>
        </Grid.Column>
        <LoginBox handleChange={this.props.handleChange}/>
        <Grid.Column>
        </Grid.Column>
      </Grid>

    );
  }

}
