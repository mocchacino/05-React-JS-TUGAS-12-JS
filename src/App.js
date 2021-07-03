import React, {Component} from "react";
import 'semantic-ui-css/semantic.min.css'
import {
  Header,
  Grid,
  Segment,
  Message,
  Image,
  Button,
  Form,
  Input,
  Checkbox
} from 'semantic-ui-react' 

class App extends Component{
  render(){
    return(
      <Grid columns='equal'>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>

        <Grid.Column></Grid.Column>

        <Grid.Column  verticalAlign='center'>
          <Grid.Row>
            <Grid.Column>
              <Header as='h3' color='teal'>
                <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' size='huge'/>
                  Member Login
                </Header>
            </Grid.Column>
          </Grid.Row>
          
          <br/>

          <Grid.Row>
            <Grid.Column textAlign='center' >
              <Segment stacked>
                <Form>
                  <Form.Field>
                    <Input icon='user' iconPosition='left' type='email' placeholder='E-mail address'/>
                  </Form.Field>
                  <Form.Field>
                    <Input icon='lock' iconPosition='left' type='password' placeholder='Password'/>          
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions'/>
                  </Form.Field>
                  <Button type='submit' color='teal' fluid>Login</Button>
                </Form>
                </Segment>
              </Grid.Column>
          </Grid.Row>

          <br/>

          <Grid.Row>
            <Message>
              <p>
                Tidak Punya Akun? Silahkan 
                <a href="/">Register</a>
              </p>
            </Message>
          </Grid.Row>
          
        </Grid.Column>

        <Grid.Column></Grid.Column>
      </Grid>
    )
  }
}

export default App;
