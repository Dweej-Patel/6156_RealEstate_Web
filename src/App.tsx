import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Navbar } from './pages/Navbar';

import { Login } from './pages/Login';
import { OnSignUp } from './pages/Login';

function App() {
  return (
    <main>
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/onsignup" component={OnSignUp} />
            </Switch>
        </BrowserRouter>
    </main>
)
}

export default App;
