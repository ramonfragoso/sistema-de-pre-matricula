import React from 'react';
import LoginBox from './LoginBox';
import {Route} from 'react-router';
import {Grid} from 'semantic-ui-react';
export default class Login extends React.Component {


  render() {
    return (
      <Grid columns={3}>
        <Grid.Column>
        </Grid.Column>
        <LoginBox/>
        <Grid.Column>
        </Grid.Column>
      </Grid>

    );
  }

}
