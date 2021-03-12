import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header.js';
import Create from './Create.js';
import Bottom from './Bottom.js';

function Cab() {
  const [table, setTable] = useState([]);

  useEffect(() => get(), []);

  const get = async () => {
    await axios.get('http://localhost:8000/allTable').then(res => {
      setTable(res.data.data);
    });
  }

  return (
    <div className='all' >
     <Header name='Приёмы' exit='Выход' />
     <Create get={get} />
     <Bottom table={table} get={get} />
    </div>
  );
}

export default Cab;
