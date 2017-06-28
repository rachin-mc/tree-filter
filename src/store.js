import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import thunkReducer from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkReducer));

export default store;
