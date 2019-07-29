import React from 'react';


const Login = (props) => {
    const {type, name, label, value, onChange, error} = props;
    return ( 
        <div className="form-group">
                        <label htmlFor="username">{label}</label>
                        {/*<input ref={this.user} id="username" type="text" className="form-control"/></div>*/}
                        <input type={type} value={value} onChange={onChange} name={name} id={name} 
                         className="form-control"/>
                            {
                                error && <div className="alert alert-danger">
                                {error}
                                </div>
                            }
        </div>
     );
}
 
export default Login;