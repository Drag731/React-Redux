import React, { Component } from 'react'
import './App.css';
import ItemMovie from './ItemMovie.js';
import Description from './Description.js';
import { sortMovieByLikes, sortMovieByRating, search, likeUp, likeDown, changeStars } from '../Features/MainPage/MainPageActions';
import { getMovieByLikes, getMovieByRating, getFlagSearch, getMovies, getInitialMovies, getLike, getStars } from '../Features/MainPage/MainPageReducer';
import { connect } from 'react-redux';

class Movies extends Component {

    sortMovieByLikes = (sort) => { this.props.sortMovieByLikes(sort) }

    sortMovieByRating = (sort) => { this.props.sortMovieByRating(sort) }

    search(event) { this.props.search(event.target.value) }

    likeUp = (id) => { this.props.likeUp(id) }

    likeDown = (id) => { this.props.likeDown(id) }

    changeStars = (id, movieId) => { this.props.changeStars(id, movieId) }

    render() {
        
        const activeMovie = (this.props.movies.filter((el) => el.id === parseInt(this.props.params.id, 10))[0]) || this.props.initialMovies[0];
        return (
            <div className="movies">   
                <div className="movies-left">
                    <div className="sort-movies">
                        <h2>Sort movies</h2>
                        <div className="buttons">
                            <button onClick={this.sortMovieByLikes.bind(this, this.props.sortByLikes)}>By likes</button>
                            <button onClick={this.sortMovieByRating.bind(this, this.props.sortByRating)}>By rating</button><br/>
                            <input onChange={this.search.bind(this)} className="search" type="search" /> 
                        </div>
                    </div>
                    {this.props.movies.map((movie) => {
                        return (<ItemMovie 
                          key={movie.id}
                          id={movie.id}
                          likes={movie.likes}
                          stars={movie.stars}
                          currentMovie={movie} 
                          likeUp={this.likeUp}
                          likeDown={this.likeDown}
                          changeStars={this.changeStars}
                          /> );
                    })}
                </div>
                    <Description
                    key={this.props.initialMovies.id} 
                    activeMovie={activeMovie}
                    stars={activeMovie.stars}
                    id={activeMovie.id}
                    changeStars={this.changeStars} 
                    />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sortByLikes: getMovieByLikes(state),
    sortByRating: getMovieByRating(state),
    flagSearch: getFlagSearch(state),
    movies: getMovies(state),
    initialMovies: getInitialMovies(state),
    flagLike: getLike(state),
    flagStars: getStars(state)
});

const mapDispatchToProps = {
    sortMovieByLikes: (sortByLikes) => sortMovieByLikes(sortByLikes),
    sortMovieByRating: (sortByRating) => sortMovieByRating(sortByRating),
    search: (flagSearch) => search(flagSearch),
    likeUp: (id) => likeUp(id),
    likeDown: (id) => likeDown(id),
    changeStars: (id, movieId) => changeStars(id, movieId)
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);