import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ComponentsProvider } from './context';

ReactDOM.render(
        <Provider store={store}>
            <ComponentsProvider>
                <App/>
            </ComponentsProvider>
        </Provider>
    , 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
