import React from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Create from './Create.js';
import Bottom from './Bottom.js';

function Cab() {

  return (
    <div className='all' >
     <Header name='Приёмы' exit='Выход' />
     <Create />
     <Bottom />
    </div>
  );
}

export default Cab;
