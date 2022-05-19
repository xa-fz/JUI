import React from 'react';
import ReactDOM from 'react-dom';
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './Contexts/theme-context';
import { GlobalDataProvider } from './Contexts/global-data';
import { IntlProvider } from 'react-intl';
import zh_CN from './i18n/zh_CN';
import en_US from './i18n/en_US';
import AppContent from './AppContent';

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
            <GlobalDataProvider>
                <ThemeProvider>
                    <IntlProvider
                        locale={'zh'}
                        messages={getLang('zh_CN')}
                    >
                       <AppContent />
                    </IntlProvider>
                </ThemeProvider>
            </GlobalDataProvider>
        </Provider>
    ,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
