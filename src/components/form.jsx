import React, { Component } from 'react';
import Joi from 'joi-browser';
import Login from './login';

class Form extends Component {
    state = { 
        data: {},
        errors : {}
     }
     validate = () => {
        const {error} = Joi.validate(this.state.data, this.schema, {abortEarly: false});
        const errors = {}
        if (!error) return null;
        for (let i = 0; i < error.details.length; i++) {
            errors[error.details[i].path[0]] = error.details[i].message; 
        }
        return errors;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        console.log(errors)
        this.setState({errors});
        if (errors) return;
        this.doSubmit();
    }
    validateProperty = ({name, value}) => {
        let obj = {[name]: value};
        const schema = {
            [name]: this.schema[name]
        }
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleInputChange = ({currentTarget}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(currentTarget);
        if (errorMessage) errors[currentTarget.name] = errorMessage;
        else delete errors[currentTarget.name];   
        const data = {...this.state.data};
        data[currentTarget.name] = currentTarget.value;
        this.setState({data, errors});
    }
    renderButton = (label) => {
        return (
            <button className="btn btn-primary" disabled={this.validate()}>{label}</button>
        );
    }
    renderInput = (name, label, type) => {
        const {data, errors} = this.state;
        return (
            <Login 
                        type={type}
                        name={name} 
                        label={label}
                        value={data[name]} 
                        onChange={this.handleInputChange}
                        error={errors && errors[name]}/>
        );
    }
}
 
export default Form;