import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'; // Create this file to combine your reducers

const store = createStore(rootReducer); // Create a Redux store with rootReducer

export default store;
