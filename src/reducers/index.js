import {combineReducers} from 'redux';
import reducer from '../reducers/reducer.js';
import movies from '../components/data.js';
import counter from './clickLikes.js'
import { routerReducer } from 'react-router-redux';


const allReducers = combineReducers ({
    movies: movies,
    counter, 
    reducer,
    routing: routerReducer
});

export default allReducers;