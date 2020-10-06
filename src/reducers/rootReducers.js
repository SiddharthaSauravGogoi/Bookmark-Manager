import { combineReducers } from 'redux';
import testReducer from './testReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  test: testReducer,
  search: searchReducer,
});

export default rootReducer;
