import React, { Component } from 'react'
import './App.css';
import ItemMovie from './ItemMovie.js';
import Description from './Description.js';
import { sortMovieByLikes, sortMovieByRating, search, likeUp, likeDown } from '../Features/MainPage/MainPageActions';
import { getMovieByLikes, getMovieByRating, getFlagSearch, getMovies, getInitialMovies, getLike } from '../Features/MainPage/MainPageReducer';
import { connect } from 'react-redux';

class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
          likeCount: ''
        };
        this.likeUp = this.likeUp.bind(this);
        this.likeDown = this.likeDown.bind(this);
    }

    sortMovieByLikes(sort) {
        this.props.sortMovieByLikes(sort);
    }

    sortMovieByRating(sort) {
        this.props.sortMovieByRating(sort);
    }

    search(event) {
        console.log(event.target.value);
        this.props.search(event.target.value);
    }

    likeUp(id) {
        this.props.likeUp(id);
    }

    likeDown(id) {
        this.props.likeDown(id);
    }

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
                          likes={movie.likes}
                          currentMovie={movie} 
                          likeUp={this.likeUp}
                          likeDown={this.likeDown}
                          changeColor={this.changeColor}
                          /> );
                    })}
                    
                </div>
                    <Description
                    key={this.props.initialMovies.id} 
                    activeMovie={activeMovie} 
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
    flagLikeUp: getLike(state)
});

const mapDispatchToProps = {
    sortMovieByLikes: (sortByLikes) => sortMovieByLikes(sortByLikes),
    sortMovieByRating: (sortByRating) => sortMovieByRating(sortByRating),
    search: (flagSearch) => search(flagSearch),
    likeUp: (id) => likeUp(id),
    likeDown: (id) => likeDown(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);