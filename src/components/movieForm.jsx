import React, { Component } from 'react';


class MovieForm extends Component {
    state = {  }
    handleSave = () => {
        this.props.history.replace('/movies');
    }
    render() {
        return ( 
            <div>
                <h2>This is movie form {this.props.match.params.id}</h2>
                <button onClick={this.handleSave} className="btn btn-secondary btn-sm">save</button>
            </div>
         );
    }
}
 
export default MovieForm;