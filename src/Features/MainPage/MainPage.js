import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchMovies, changeColor, selectMovie, updateMovie } from './MainPageActions';
import { getMovies, getColor, getSelectedMovie } from './MainPageReducer';
import { Link } from 'react-router';


class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.changeName = this.changeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ name: nextProps.selectedMovie.title });
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    changeColor(color) {
        this.props.changeColor(color);
    }

    selectMovie(id) {
        this.props.push('./ura');
        this.props.selectMovie(id);
    }

    changeName(e) {
        this.setState({ name: e.target.value })
    }

    handleSubmit() {
        const data = { ...this.props.selectedMovie, title: this.state.name };
        this.props.updateMovie(data, this.props.selectedMovie.id);
    }

    render() {

        const { movies } = this.props;
        return (
            <div>
                <div>
                    name:
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.changeName}
                    />
                    <button onClick={this.handleSubmit}>Save changes</button>
                </div>
                {movies.map((movie) => {
                    return (
                        <div
                            key={movie.id}
                            style={{ margin: 10, border: '1px solid green', width: 300 }}
                            onClick={this.selectMovie.bind(this, movie.id)}
                        >
                          <div>{movie.title}</div>
                          <div>{movie.director}</div>
                        </div>
                    );
                })}
            </div>
        )
    }
}
MainPage.defaultProps = {
    selectedMovie: { title: ''}
};

const mapStateToProps = state => ({
    color: getColor(state),
    movies: getMovies(state),
    selectedMovie: getSelectedMovie(state)
});

const mapDispatchToProps = {
    fetchMovies: () => fetchMovies(),
    changeColor: (color) => changeColor(color),
    selectMovie: id => selectMovie(id),
    updateMovie: (data, id) => updateMovie(data, id),
    push: (l) => push(l)
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);