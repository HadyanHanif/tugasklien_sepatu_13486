// store.js
import { createStore } from 'redux';
import shoeReducer from './shoeReducer';

const store = createStore(shoeReducer);

export default store;
