import React, { Component } from 'react';
import HeaderMenu from './components/HeaderMenu.js';


class App extends Component {
  render() {
    return (
      <div>
          <HeaderMenu />
          <div className="main">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
