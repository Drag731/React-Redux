import React, { Component } from 'react';
import './font-awesome.min.css';

class Stars extends Component {

    render() {
        const movie = this.props.currentMovie;
        let i = 0;
        const arrayOfStarsClass = [];
        while (i < 5) {
            if (i < movie.stars) {
                arrayOfStarsClass.push(<i className="fa fa-star" key={arrayOfStarsClass.length}></i>);
            } else {
                arrayOfStarsClass.push(<i className="fa fa-star-o" key={arrayOfStarsClass.length}></i>);
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