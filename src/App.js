import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr/>
          <Route exact path="/home" component={Home}/>
        </div>
      </Router>
    </div>
  );
}

function getValue(state){
  let { initData } = state.rootReducer;
  console.log(initData);
  return{
    initData
  }
}
export default connect(getValue)(App);