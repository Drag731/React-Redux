import React, { Component } from 'react';
import Stars from './Stars.js';
import likeImg from './likeImg.js';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class ItemMovie extends Component {

    changeStars = (id, movieId)=> { this.props.changeStars(id, movieId) }

    render() {

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
                    <Stars changeStars={this.props.changeStars} stars={this.props.stars} id={this.props.id} />
                </div>
            </div>
        );
    }
}


export default ItemMovie;

