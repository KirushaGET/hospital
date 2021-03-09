import React, { useState, useEffect} from 'react';
import './Create.css';

function Create() {
  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [complaints, setComplaints] = useState('');

  function save() {
    console.log(name,doctor,date,complaints);
  }

  return (
    <div className='string'>
      <div className='name'>
      <span className='spanName'>Имя:</span>
      <input 
        className='InputName' 
        onChange={(e) => 
          setName(e.target.value)
        }
      ></input>
      </div>
      <div className='doctor'>
      <span className='spanName'>Врач:</span>
      <form action="select1.php" method="post" >
        <p><select className='Range' size='1'>
         <option  hidden=""></option>
          <option value="Чебурашка">Чебурашка</option>
          <option selected value="Крокодил Гена">Крокодил Гена</option>
          <option value="Шапокляк">Шапокляк</option>
          <option value="Крыса Лариса">Крыса Лариса</option>
        </select></p>
      </form>
      </div>
      <div className='date'>
      <span className='spanName'>Дата:</span>
      <input 
        className='InputName' 
        type='date'
        onChange={(e) => 
          setDate(e.target.value)
        }
      ></input>
      </div>
      <div className='complaints'>
      <span className='spanName'>Жалобы:</span>
      <input 
        className='InputName' 
        onChange={(e) => 
          setComplaints(e.target.value)
        }
      ></input>
      </div>
      <button className='buttonAdd' onClick={() => save()}>Добавить</button>
    </div>
  );
}

export default Create;
