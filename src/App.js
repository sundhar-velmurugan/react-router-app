import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Shop from './Shop';
import Item from './ItemDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <h1>
            <Link to='/'>App</Link>
          </h1>
          <ul className='nav-links'>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/shop' exact>
            <Shop />
          </Route>
          <Route path='/shop/:id'>
            <Item />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
