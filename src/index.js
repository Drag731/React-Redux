import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {createStore} from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import About from './components/About'
import Home from './components/Home'
import Movies from './components/Movies.js';
import configureStore from './configure-store';

const store = configureStore();


ReactDOM.render(
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={App}>
                        <IndexRoute component={Movies} />
                        <Route path='movies' component={Movies} />
                        <Route path='/movies/:id' component={Movies} />
                        <Route path='home' component={Home} />
                        <Route path='about' component={About} />
                    </Route>
                  </Router>
             </Provider>, document.getElementById('root'));

registerServiceWorker();
store.subscribe(() =>
  console.log(store.getState())
)
