import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home/home';
import { useAtom } from 'jotai';
import { globalAtom } from './utils/atoms';

const AppContent = () => {
    const global_data = useAtom(globalAtom)[0];
    const CurrentComp = global_data.current_component;

    return (
        <Router>
            <Route exact path='/' component={Home}></Route>
            <Route path='/jui' render={(props) => 
                <App {...props}>
                    <Switch>
                        <Route render={(props) => <CurrentComp {...props}/>} path={'/jui/:components'} exact />
                    </Switch>
                </App>
        }/>
        </Router>
    )
}

export default AppContent