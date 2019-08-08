import { createStore } from 'redux';
import allReducer from './reducers';

// createStore: 用于创建store实例
const store = createStore(allReducer);

export default store;