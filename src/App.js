import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Labor from './pages/Labor';
import Test from './pages/Test';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
    return (
    <Router>
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/labor" component={Labor} exact />
        <Route path="/test" component={Test} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        </Switch> 
    </Router>
    
    );
}

export default App;