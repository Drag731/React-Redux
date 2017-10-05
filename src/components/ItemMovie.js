import React, { Component } from 'react';
import Stars from './Stars.js';
import likeImg from './likeImg.js';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class ItemMovie extends Component {

    constructor(props){
        super(props);
        this.likeDown = this.likeDown.bind(this);
        this.state = { likeCount: props.currentMovie.likes };
    }

    likeDown() {
        this.setState({lilkeCount: this.props.currentMovie.likes -= 1});
        this.props.likeDown();
    }

    render() {
        console.log(this.props.currentMovie.likes)
        return (
            <div className="movie-item">
                <div className="likes">
                    <img onClick={this.props.likeUp.bind(this,  this.props.currentMovie.id)} className="likes-img" src={likeImg.like} alt="likeUp"/>
                    <img onClick={this.props.likeDown.bind(this,  this.props.currentMovie.id)} className="likes-img" src={likeImg.dislike} alt="likeDown"/>
                    likes
                </div>
                
                <div className="poster">
                    <h3 className="movie-name">
                        <Link to={'/movies/' + this.props.currentMovie.id} className="movie-name-link">
                            {this.props.currentMovie.title}
                        </Link></h3>
                    <img className="poster-img" src={this.props.currentMovie.posterUrl} alt={this.props.currentMovie.title}/>
                </div>
                <div className="count-likes">{this.props.likes}</div>
                <div className="stars">
                    <Stars currentMovie= {this.props.currentMovie}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        
    }
}

function matchDispatchToProps (dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(ItemMovie);

