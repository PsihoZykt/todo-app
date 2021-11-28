import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMW from 'redux-thunk';
// import logger from 'redux-logger';
import navReducer from './navReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  navReducer,
  authReducer,
  form: formReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMW));
window.store = store;
export default store;
