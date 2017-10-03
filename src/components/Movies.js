import React, { Component } from 'react'
import './App.css';
import ItemMovie from './ItemMovie.js';
import Description from './Description.js';
import movies from './data.js';
import { changeColor, sortMovie, sortMovieByRating  } from '../Features/MainPage/MainPageActions';
import { getColor, getMov, getMovieByRating } from '../Features/MainPage/MainPageReducer';
import { connect } from 'react-redux';

class Movies extends Component {
    constructor(props){
        super(props);
  
        const selectedId = props.movies && props.movies[0] && props.movies[0].id;
        this.state = {
          activeId: selectedId,
          movies: props.movies,
          likeCount: '',
        };
        this.change = this.change.bind(this);
        this.likeUp = this.likeUp.bind(this);
        this.likeDown = this.likeDown.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(color) {
        this.props.changeColor(color);
    }

    sortMovie(sort) {
        this.props.sortMovie(sort);
    }

    sortMovieByRating(sort) {
        this.props.sortMovieByRating(sort);
    }

    selectMovie(id) { 
        this.props.selectMovie(id);
    }

    change(id) {
        this.setState({activeId: id});
    }

    likeUp() {
        this.setState({likeCount: 'up'});
    }

    likeDown() {
        this.setState({likeCount: 'down'});
    }

    render() {
        const activeMovie = this.props.movies.filter((el) => el.id === parseInt(this.state.activeId, 10))[0];
        return (
            <div className="movies">   
                <div className="movies-left">
                    <div className="sort-movies">
                        <h2 style={{ color: this.props.color}} onClick={this.changeColor.bind(this, 'red')}>Sort movies</h2>
                        <div className="buttons">
                            <button onClick={this.sortMovie.bind(this, this.props.sort)}>By likes</button>
                            <button onClick={this.sortMovieByRating.bind(this, this.props.sortByRating)}>By rating</button><br/>
                            <input className="search" type="search" /> 
                        </div>
                    </div>
                    {this.props.movies.map((movie) => {
                        return (<ItemMovie 
                          key={movie.id}
                          currentMovie={movie} 
                          change={this.change}
                          likeUp={this.likeUp}
                          likeDown={this.likeDown}
                          changeColor={this.changeColor}
                          /> );
                    })}
                    
                </div>
                    <Description 
                      key={this.props.movies.id} 
                      activeMovie={activeMovie} 
                      change={this.change}
                      movies={this.props.movies}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    color: getColor(state),
    sort: getMov(state),
    sortByRating: getMovieByRating(state),
    movies: movies
    // movies: getMovies(state)
    // selectedMovie: getSelectedMovie(state)
});

const mapDispatchToProps = {
    changeColor: (color) => changeColor(color),
    sortMovie: (sort) => sortMovie(sort),
    sortMovieByRating: (sort) => sortMovieByRating(sort)
    // selectMovie: id => selectMovie(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);