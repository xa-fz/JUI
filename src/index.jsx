import React from 'react';
import ReactDOM from 'react-dom';
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import './index.css';
import App from './App';
import Home from './Home/home';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './Contexts/theme-context';
import { IntlProvider } from 'react-intl';
import zh_CN from './i18n/zh_CN';
import en_US from './i18n/en_US';

const getLang = (l) => {
    let lang = '';
    switch(l) {
        case 'en_US':
            lang = en_US;
            break;
        case 'zh_CN':
            lang = zh_CN;
            break;
        default:
            lang = zh_CN;
            break;
    }
    return lang
}

ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider>
                <IntlProvider
                    locale={'zh'}
                    messages={getLang('zh_CN')}
                >
                    <Router>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/jui' component={App}></Route>
                    </Router>
                </IntlProvider>
            </ThemeProvider>
        </Provider>
    ,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
