import React,{ useContext } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalDataContext } from './Contexts/global-data';
import App from './App';
import Home from './Home/home';

const AppContent = () => {
    const global_data = useContext(GlobalDataContext)[0];
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