
import React, { Component } from 'react';
import Login from './login';
import Joi from 'joi-browser';
import Form from './form';

class LoginForm extends Form {
    //user = React.createRef();
    state = { 
        data: {
            username: '',
            password: ''
        },
        errors : {}
     };
     schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
     };

    
    doSubmit = () => {
        console.log('submited');        
    }


    render() { 
        return ( 
            <div className="container">
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'UserName', 'text')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
         );
    }
}
 
export default LoginForm;