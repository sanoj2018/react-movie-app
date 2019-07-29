import React from 'react';
import Like from './Like';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Movie extends React.Component {
   
    handleToggleLike = (id) => {
        this.props.toggleLike(id);
        setTimeout(() => {
            this.forceUpdate();
        }, 10)
    }
    handleDeleteMovie = (id) => {
        this.props.onMovieDelete(id);
    }
    render() { 
        const {_id, title, genre, numberInStock, dailyRentalRate, isLiked} = this.props.movie;
        return ( 
            <React.Fragment>
            <tr>
                <td><Link to={`/movies/${_id}`}>{title}</Link></td>
                <td>{genre.name}</td>
                <td>{numberInStock}</td>
                <td>{dailyRentalRate}</td>
                <td><Like 
                    isLiked={isLiked}
                    handleToggleLike={ () => {
                        this.handleToggleLike(_id);
                    }}/></td>
                <td><button onClick={
                    () => {
                        this.handleDeleteMovie(_id);
                    }
                } className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
        </React.Fragment>
         );
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onMovieDelete : (id) => dispatch({ type: "DELETE_MOVIE", value: id }),
      toggleLike: (id) => dispatch({ type: "TOGGLE_LIKE", value: id})
    }
  }


 
export default connect(null, mapDispatchToProps)(Movie);

