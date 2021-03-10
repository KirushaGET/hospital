import React, { useState, useEffect} from 'react';
import './Bottom.css';

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
        <svg className='but' onClick={() => del()}width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="black" fill-opacity="0.8"/>
        </svg>
        <svg className='but' onClick={() => edit()} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" fill="black" fill-opacity="0.8"/>
        </svg>
      </tr>
    </tr>
  </table>  
  )
}
export default Create;
