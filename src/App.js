import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
//
import { Link, Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';

import './app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <div className='grid'>
        <nav className='nav'>
          <h1 className='nav__logo'>
            <Link to='/'>WebHacks</Link>
          </h1>
          <ul className='nav__items'>
            <Link to='/about'>VSCode</Link>
            <Link to='/blog'>Graphics</Link>
            <Link to='/blog'>Something</Link>
            {/* <Link to='/dynamic'>Dynamic</Link> */}
          </ul>
        </nav>
        <div className='content'>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              {/* <Dynamic path='dynamic' /> */}
              <Routes path='*' />
            </Router>
          </React.Suspense>
        </div>
      </div>
    </Root>
  );
}

export default App;
