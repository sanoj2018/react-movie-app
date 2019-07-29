
import React, { Component } from 'react';
import Form from './form';
import Joi from 'joi-browser';


class registerForm extends Form {
    //user = React.createRef();
    state = { 
        data: {
            username: '',
            password: '',
            name: ''
        },
        errors : {}
     };

     schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().min(5).required().label('Password'),
        name: Joi.string().required().label('Name')
     };
    
    doSubmit = () => {
        console.log('submited');        
    }

    render() { 
        return ( 
            <div className="container">
                <h1>Registration Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'UserName', 'text')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'name', 'text')}
                    {this.renderButton('Register')}
                </form>
            </div>
         );
    }
}
 
export default registerForm;