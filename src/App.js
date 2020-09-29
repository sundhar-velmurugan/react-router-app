import React from 'react';
import './App.css';

import Home from './Home';
import About from './About';
import Shop from './Shop';

function App() {
  return (
    <div className='App'>
      <nav>
        <h1>App</h1>
        <ul class='nav-links'>
          <li>About</li>
          <li>Shop</li>
        </ul>
      </nav>
      <Home />
      <About />
      <Shop />
    </div>
  );
}

export default App;
