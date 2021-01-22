import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Start from '../Start/Start';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments'

function App() {







  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <nav>
          <Link to="/">Start--</Link>
          <Link to="/feeling">feeling--</Link>
          <Link to="/understanding">understanding--</Link>
          <Link to="/support">support--</Link>
          <Link to="/comments">comments--</Link>
        </nav>
        <div>

          <Route path='/' exact component={Start} />
          <Route path='/feeling' component={Feeling} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />

        </div>
      </div>
    </Router>

  );
}

export default App;
