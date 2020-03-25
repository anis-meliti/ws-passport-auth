import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Profile from './Components/Profile';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/' render={() => <SignIn />} />
        <Route exact path='/register' render={() => <SignUp />} />
        <Route exact path='/home' render={() => <Home />} />
        <Route exact path='/profile' component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
