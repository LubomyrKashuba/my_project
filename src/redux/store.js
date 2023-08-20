import { createStore, combineReducers } from 'redux';
import contactReducer from './userReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = createStore(rootReducer);
