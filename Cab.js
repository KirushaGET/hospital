import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header.js';
import Create from './Create.js';
import Bottom from './Bottom.js';

function Cab() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    const get = async () => {
      await axios.get('http://localhost:8000/allTable').then(res => {
        setTable(res.data.data);
      });
    }
    get();
  }, [table]);

  return (
    <div className='all' >
     <Header name='Приёмы' exit='Выход' />
     <Create />
     <Bottom table = {table}/>
    </div>
  );
}

export default Cab;
