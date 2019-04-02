import React, { Component } from 'react';
import * as AuthenticateAPI from '../../api/userApi';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import App from '../../components/App'
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
      console.log('this.state ', this.state)
    let payload={
 		  "email":this.state.username,
 		  "password":this.state.password
 		}
    let result = AuthenticateAPI.onAuthenticate(payload)
    if (result) {
        //redirigir a la siguiente pantalla
      console.log('redirige a la siguiente pantalla')
      return (<Redirect to="/main" />);
    } else {
      console.log('usuario no existe')        
    }

/* 		let uploadScreen=[];
 		uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
 		self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})*/
  		
  }

	render() {
	    return (
        <Row className="login__form-row">
        <div className="login__form-row-blur"></div>
        <Col></Col>
        <Col  md="auto">
         <div className="login__form-container">
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} onClick={(event) => this.onSubmitForm(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
        </Col>

          <Col></Col>
        </Row>
	    );
	  }
}

export default LoginForm;
