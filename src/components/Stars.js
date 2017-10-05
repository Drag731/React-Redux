import React, { Component } from 'react';
import './font-awesome.min.css';

class Stars extends Component {

    changeStars(event) {
        let movieId = this.props.id;
        let starId = parseInt(event.target.id, 10);
        this.props.changeStars(starId, movieId);
    };

    render() {
        const movie = this.props.currentMovie;
        let i = 1;
        const arrayOfStarsClass = [];
        while (i < 6) {
            if (i <= this.props.stars) {
                arrayOfStarsClass.push(<i onClick={this.changeStars.bind(this)} className="fa fa-star" id={i} key={arrayOfStarsClass.length}></i>);
            } else {
                arrayOfStarsClass.push(<i onClick={this.changeStars.bind(this)} className="fa fa-star-o" id={i} key={arrayOfStarsClass.length}></i>);
            }
            i++;
        }

        return (
            <div>
                {arrayOfStarsClass}
            </div>
        );
    }
}

export default Stars;