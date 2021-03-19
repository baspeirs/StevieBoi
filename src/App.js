import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} /> 
        </div>
      </Router>
    </div>
  );
}

export default App;
