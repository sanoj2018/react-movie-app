import React, { Component } from 'react';
import Movie from './Movie';
import {connect} from 'react-redux';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './pagination';
import {paginate} from '../utils/paginate';


class MovieList extends Component {
    componentDidMount() {
        const movieList = getMovies();
        this.props.onMovieLoad(movieList);
      }

    render() { 
        let movies;
        if (this.props.selectedGenre !== 'All Genre') {
            movies = Array.isArray(this.props.movieList) && this.props.movieList.filter(movie => movie.genre.name === this.props.selectedGenre);
        } else {
            movies = this.props.movieList;
        }
        let totalItems = movies.length;
        movies = paginate(movies, this.props.pageNumber ,4);
        const count = movies.length;
        return ( 
            <div className="col-9">
                <button className="btn btn-sm btn-primary">Add Movie</button>
                {
                    count > 0 ? 
                    <h3>showing {totalItems} movies in database</h3> 
                    : <h3>there are no movies</h3>
                }
                {count > 0 && 
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map((movie, index) => (
                                    <Movie key={index} movie={movie}></Movie>
                                )
                            )
                        }
                    </tbody>
                </table>}
                <Pagination count={totalItems} pageSize={4}/>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movies,
        pageNumber: state.pageNumber,
        selectedGenre: state.selectedGenre
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      onMovieLoad : (movieList) => dispatch({ type: "LOAD_MOVIES", value: movieList })
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);