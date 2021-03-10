import React, { useState, useEffect} from 'react';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import Cab from './Cab.js';
import Registr from './Registr.js';
import SignIn from './SignIn.js';
import './App.css';

function App() {

  return (
    <div className="all">
      <Switch>
            <Route path='/cab' component={Cab}/>
            <Route path='/registr' component={Registr}/>
            <Route path='/signIn' component={SignIn}/>
      </Switch>
      
      {localStorage.getItem('user') 
        ? <Switch><Redirect from='/' to='/cab' /></Switch> 
        : <Switch><Redirect from='/' to='/signIn' /> </Switch> 
      }
    </div>
  );
}

export default App;
