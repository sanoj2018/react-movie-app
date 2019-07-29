import React, { Component } from 'react';

import {getGenres} from '../services/fakeGenreService';

import {connect} from 'react-redux';


class Filter extends Component {
    state = { 
        allGenres: [{_id: 1, name: 'All Genre'}]
     }
     onGenreChange = (name) => {
        this.props.onGenreUpdate(name);
     }
    componentDidMount() {
        const allGenres = [...this.state.allGenres, ...getGenres()]
        this.setState({allGenres});
    }
    getGenreClass = (genre) => {
        return this.props.selectedGenre === genre ? "list-group-item active" : 'list-group-item';
    }
    render() { 
        return ( 
            <div className="col-3 my-5">
                <ul className="list-group">
                {this.state.allGenres.map(genre => (
                    <li onClick={() => {
                        this.onGenreChange(genre.name);
                    }} key={genre._id} className={this.getGenreClass(genre.name)}>{genre.name}</li>
                ))}
            </ul>
            </div>
         );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGenreUpdate: (name) => dispatch({type: 'GENRE_CHANGED', value: name})
    }
}
const mapStateToProps = (state) => {
    return {
        selectedGenre: state.selectedGenre
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Filter);