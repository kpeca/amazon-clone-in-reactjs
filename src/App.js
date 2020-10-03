import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
function App() {
  return (
     <div className="app">
        <Router>
          <Switch>
       
          <Route  path='/checkout'>
            <h1> Im checkout</h1>
          </Route>
          <Route  path='/login'>
            <h1> Im login</h1>
          </Route>
          <Route path='/'>
            <Header />
            <h1> Im home</h1>
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
