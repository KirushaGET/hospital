import React, { useState} from 'react';
import { TextField, MenuItem, Button } from '@material-ui/core';
import axios from 'axios';
import Alert from './Alert';
import './Create.css';

function Create({get}) {
  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [complaints, setComplaints] = useState('');
  const [alertFlag, setAlertFlag] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStyle, setAlertStyle] = useState('');
  const rangeDoctor = [
   'Чучалин Александр Николаевич',
   'Александров Никита Михайлович', 
   'Амосов Николай Михайлович', 
   'Альбрехт фон Галлер'
  ];

  const Add = async () => {
    let date2 = date.split('-');
    date2 = date2[2] + '-' + date2[1] + '-' + date2[0];
    try {
      await axios.post('http://localhost:8000/createRequest', {
        name,
        doctor,
        date: date2,
        complaints
      }).then(res => {
        if(res.status === 200 || res.status === 201 ||res.status === 202 ) {
          setName('');
          setDoctor('');
          setDate('');
          setComplaints('');
          setAlertFlag(true);
          setAlertMessage('Успешно');
          setAlertStyle('success');
        } else {
          setAlertFlag(true);
          setAlertMessage('Сервер отправил ответ, но произошла неожиданная ошибка');
          setAlertStyle('error');
        }
      })

      get();
    } catch (e) {
      setAlertFlag(true);
      setAlertMessage('Запрос на исполнение не был исполнен');
      setAlertStyle('error');
    }
  }

  return (
    <>
    <div className='string'>
      <div className='name'>
      <span className='spanName'>Имя:</span>
      <TextField 
        className='InputName' 
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
      ></TextField>
      </div>
      <div className='doctor'>
      <span className='spanName'>Врач:</span>
      <TextField
        id="doctorInput"
        select
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        variant="outlined"
      >
        {rangeDoctor.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </TextField>
      </div>
      <div className='date'>
      <span className='spanName'>Дата:</span>
      <TextField 
        className='InputName' 
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        variant="outlined"
      />
      </div>
      <div className='complaints'>
      <span className='spanName'>Жалобы:</span>
      <TextField 
        className='InputName' 
        value={complaints}
        onChange={(e) => setComplaints(e.target.value)}
        variant="outlined"
      />
      </div>
      <button className='buttonAdd' onClick={() => Add()}>Добавить</button>
    </div>
    <Alert text={alertMessage} state={alertFlag} setAlertFlag={setAlertFlag} alertStyle={alertStyle}/>
    </>
  );
}

export default Create;
