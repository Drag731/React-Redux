import { createStore } from 'redux';
import reducers from './reducers';
// import logger from './Middlewares/logger';


const configureStore = () => {
    return createStore(
        reducers
    );
};

export default configureStore;