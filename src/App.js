import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
function App() {
  return (
     <div className="app">
        <Router>
          <Switch>
       
          <Route  path='/checkout'>
          <Header />
            <h1> Im checkout</h1>
          </Route>
          <Route  path='/login'>
            <h1> Im login</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
          </Switch>
        </Router>
         {/* Header */}
         {/* Banner */}
         {/* Home */}
    </div>    
  );
}

export default App;
