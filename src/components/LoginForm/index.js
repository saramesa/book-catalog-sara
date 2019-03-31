import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './LoginForm.scss'

class LoginForm extends Component {
constructor(props){
  	super(props);
  	this.state={
  		username:'',
  		password:''
  	}

  	this.onSubmitForm = this.onSubmitForm.bind(this);
}

  	onSubmitForm(e) {
  		let payload={
 			"email":this.state.username,
 			"password":this.state.password
 		}
 		console.log('payload ', payload)
 		if (payload.email === 'Test' && payload.password === '123') {
 			console.log('login succesful')
 		} else {
 			console.log('no existe el usuario')
 		}
/* 		let uploadScreen=[];
 		uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
 		self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})*/
  		
  	}

	render() {
	    return (
        <Row className="login__form-row">
        <Col></Col>
        <Col  md="auto">
          <Form className="login__form-container">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange = {(event,newValue) => this.setState({username:newValue})}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange = {(event,newValue) => this.setState({password:newValue})}/>
            </Form.Group>
            <Button className="login__form-button" onClick={(event) => this.onSubmitForm(event)}>
              Submit
            </Button>
          </Form>
        </Col>

          <Col></Col>
        </Row>
	    );
	  }
}

export default LoginForm;
