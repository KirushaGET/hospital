import React, { useState, useEffect} from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import axios from 'axios';
import './Create.css';

function Create() {

  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [complaints, setComplaints] = useState('');

  const Add = async () => {
    await axios.post('http://localhost:8000/createRequest', {
      name,
      doctor,
      date,
      complaints
    }).then(res => {
      setName('');
      setDoctor('');
      setDate('');
      setComplaints('');
    })
  }

  const rangeDoctor = ['Чебурашка', 'Крокодил Гена', 'Шапокляк', 'Крыса Лариса'];
  return (
    <div className='string'>
      <div className='name'>
      <span className='spanName'>Имя:</span>
      <input 
        className='InputName' 
        value={name}
        onChange={(e) => 
          setName(e.target.value)
        }
      ></input>
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
      <input 
        className='InputName' 
        type='date'
        value={date}
        onChange={(e) => 
          setDate(e.target.value)
        }
      ></input>
      </div>
      <div className='complaints'>
      <span className='spanName'>Жалобы:</span>
      <input 
        className='InputName' 
        value={complaints}
        onChange={(e) => 
          setComplaints(e.target.value)
        }
      ></input>
      </div>
      <button className='buttonAdd' onClick={() => Add()}>Добавить</button>
    </div>
  );
}

export default Create;
