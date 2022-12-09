import { createStore } from 'redux';
import { readerReducer } from './reducers/readerReducer.js';

const appStore = createStore(readerReducer);

export default appStore;
