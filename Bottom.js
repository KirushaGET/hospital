import React, { useState, useEffect} from 'react';
import { useHistory, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import deleteImg from './delete.svg'
import editImg from './edit.svg'
import './Bottom.css';

function Create() {
  const [table, setTable] = useState([]);
  let history = useHistory();

  useEffect(async() => {
    await axios.get('http://localhost:8000/allTable').then(res => {
      setTable(res.data.data);
    });
  }, []);

  const del = async(index) => {
    await axios.delete(`http://localhost:8000/deleteTable?_id=${table[index]._id}`);
    history.push('/');
    history.push('/cab');
  }

  function edit(index) {
    console.log('edit')
  }
  return (
  <table className='allTabl' >
    <tr className='tableString' key={'1'}>
      <p className='bottomP' key={'2'}>Имя</p>
      <p className='bottomP' key={'3'}>Врач</p>
      <p className='bottomP' key={'4'}>Дата</p>
      <p className='bottomP' key={'5'}>Жалобы</p>
    </tr>
    <tr className='tableTabl' bordercolor='black' key={'6'}>
    {
      table.map((value, index) => 
        <tr className='newString' key={`${index}`}>
          <td className='bottomPLeft' key={`${value.name}`}>{value.name}</td>
          <td className='bottomP1' key={`${value.doctor}`}>{value.doctor}</td>
          <td className='bottomP1' key={`${value.date}`}>{value.date}</td>
          <td className='bottomP1' key={`${value.complaints}`}>{value.complaints}</td>
          <div className='bottomPEnd1'>
            <td><img src={editImg} alt={"editImg"} onClick={() => edit(index)}/> </td>
            <td><img src={deleteImg} alt={"deleteImg"} onClick={() => del(index)}/>  </td>
          </div>
        </tr>
      )
    }
    </tr>
  </table>  
  )
}

export default Create;
