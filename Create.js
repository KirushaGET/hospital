import React, { useState} from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import axios from 'axios';
import './Create.css';

function Create({get}) {
  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [complaints, setComplaints] = useState('');
  const rangeDoctor = ['Чучалин Александр Николаевич', 'Александров Никита Михайлович', 'Амосов Николай Михайлович', 'Альбрехт фон Галлер'];

  const Add = async () => {
    let date2 = date.split('-');
    date2 = date2[2] + '-' + date2[1] + '-' + date2[0];

    await axios.post('http://localhost:8000/createRequest', {
      name,
      doctor,
      date: date2,
      complaints
    }).then(res => {
      setName('');
      setDoctor('');
      setDate('');
      setComplaints('');
    })
    get();
  }

  return (
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
      ></TextField>
      </div>
      <div className='complaints'>
      <span className='spanName'>Жалобы:</span>
      <TextField 
        className='InputName' 
        value={complaints}
        onChange={(e) => setComplaints(e.target.value)}
        variant="outlined"
      ></TextField>
      </div>
      <button className='buttonAdd' onClick={() => Add()}>Добавить</button>
    </div>
  );
}

export default Create;
