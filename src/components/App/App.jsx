import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Start from '../Start/Start';


function App() {







  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      
      <div>
        <Router>
          <Route to='/' component={Start}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
