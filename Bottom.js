import React, { useState, useEffect} from 'react';
import './Bottom.css';
import deleteImg from './delete.svg'
import editImg from './edit.svg'

function Create() {
  function del() {
    console.log('del')
  }

  function edit() {
    console.log('edit')
  }
  return (<table className='allTabl' >
    <tr className='tableString'>
      <p className='bottomP'>Имя</p>
      <p className='bottomP'>Врач</p>
      <p className='bottomP'>Дата</p>
      <p className='bottomP'>Жалобы</p>
    </tr>
    <tr className='tableTabl'>
      <tr className='bottomP1'>Имя</tr>
      <tr className='bottomP1'>Врач</tr>
      <tr className='bottomP1'>Дата</tr>
      <tr className='bottomP1'>Жалобы</tr>
      <tr className='bottomPEnd1'>
      <img src={editImg} alt={"editImg"} onClick={() => edit()}/>
      <img src={deleteImg} alt={"deleteImg"} onClick={() => del()}/>  
      </tr>
    </tr>
  </table>  
  )
}
export default Create;
