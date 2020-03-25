import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/' render={() => <SignIn />} />
        <Route exact path='/register' render={() => <SignUp />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
