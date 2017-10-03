import React, { Component } from 'react'

export default class About extends Component {
    
    componentDidMount() {
        setTimeout(() =>
            this.props.location.pathname === '/about' ? this.props.router.push('/') : false, 5000);
    }

  render() {
    return (
      <div>
        <div>About page</div>
      </div>
    )
  }
}