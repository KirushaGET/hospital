import React, { useState, useEffect} from 'react';
import axios from 'axios';
import deleteImg from './delete.svg'
import editImg from './edit.svg'
import './Bottom.css';

function Create({table}) {
  const del = async(index) => {
    await axios.delete(`http://localhost:8000/deleteTable?_id=${table[index]._id}`);
  }

  function edit(index) {
    console.log('edit')
  }

  return (
  <table className='all-tabl' >
    <tr className='table-string' >
      <p className='bottom-p' >Имя</p>
      <p className='bottom-p' >Врач</p>
      <p className='bottom-p' >Дата</p>
      <p className='bottom-p' >Жалобы</p>
    </tr>
    <tr className='tableTabl' bordercolor='black' >
    {
      table.map((value, index) => 
        <tr className='new-string' >
          <td className='bottom-p-left' >{value.name}</td>
          <td className='bottom-p1' >{value.doctor}</td>
          <td className='bottom-p1' >{value.date}</td>
          <td className='bottom-p1' >{value.complaints}</td>
          <div className='bottom-p-end1'>
            <td>
              <img 
              src={editImg} 
              alt={"editImg"} 
              onClick={() => edit(index)}
              />
            </td>
            <td>
              <img 
              src={deleteImg}
              alt={"deleteImg"} 
              onClick={() => del(index)}
              />
            </td>
          </div>
        </tr>
      )
    }
    </tr>
  </table>  
  )
}

export default Create;
