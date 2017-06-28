import { combineReducers } from 'redux';
import filterReducer from './reducer_assignment';

const rootReducer = combineReducers({
  filtering: filterReducer
});

export default rootReducer;
