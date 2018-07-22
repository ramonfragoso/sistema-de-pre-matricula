import React from 'react';
import {Grid, Segment, Image,Divider} from 'semantic-ui-react';
import FormLogin from './FormLogin';
export default class LoginBox extends React.Component {


  render() {
    return (
      <Grid.Column>

      <Segment size='massive' style={{marginTop:'30%'}}>
        <Image src={ require('../../assets/ufcg-logo.png')} size='small' centered />
        <Divider/>
        <div style={{textAlign:'center'}}>
          SISTEMA DE PRÉ-MATRÍCULA
        </div>
        <FormLogin/>
      </Segment>

      </Grid.Column>
    )
  }

}
