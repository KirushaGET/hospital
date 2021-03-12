import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.js';
import Alert from './Alert';
import './SignIn.css';

function SignIn() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [alertFlag, setAlertFlag] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStyle, setAlertStyle] = useState('');
  const regPassword = /(?=.*[0-9])[A-Za-z0-9]{5,}/;
  let history = useHistory();
  const Sign = async () => {

    if(login.length < 6) {
      setAlertMessage('Логин должен быть не меньше 6 символов');
    }
    else if (password.length < 6) {
      setAlertMessage('Пароль должен быть не меньше 6 символов');
    } 
    else if (password.match(regPassword) === null) {
      setAlertMessage('В пароле должны быть только латинские буквы и 1 цифра');
    }
    else {
      try {
        await axios.post('http://localhost:8000/signIn', {
          login,
          password
        }).then(res => {
          setLogin('');
          setPassword('');
          localStorage.setItem('user', login);
          history.push('/cab');
        })
      } catch (e) {
        setAlertMessage('Такого пользователя не существует');
      }
    }
    setAlertFlag(true);
    setAlertStyle('error');
  }

  function registr () {
    history.push('/registr');
  }

  return (
    <div className="all1">
      <Header name='Войти в систему'/>
      <body>
        <svg className='bodyImg1'width="376" height="376" viewBox="0 0 376 376" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M188 83.8333V0.5H0.5V375.5H375.5V83.8333H188ZM75.5 333.833H38V292.167H75.5V333.833ZM75.5 250.5H38V208.833H75.5V250.5ZM75.5 167.167H38V125.5H75.5V167.167ZM75.5 83.8333H38V42.1667H75.5V83.8333ZM150.5 333.833H113V292.167H150.5V333.833ZM150.5 250.5H113V208.833H150.5V250.5ZM150.5 167.167H113V125.5H150.5V167.167ZM150.5 83.8333H113V42.1667H150.5V83.8333ZM338 333.833H188V292.167H225.5V250.5H188V208.833H225.5V167.167H188V125.5H338V333.833ZM300.5 167.167H263V208.833H300.5V167.167ZM300.5 250.5H263V292.167H300.5V250.5Z" fill="black" fill-opacity="0.8"/>
        </svg>
        <div className='registrWindow1'>
          <span className='registrSpan1'> Войти в систему</span>
          <span className='registrUpInput1'>Login:</span>
          <input 
            className='inputRegistr1' 
            placeholder='Login' 
            value={login}
            onChange={(e) => 
              setLogin(e.target.value)
            }
          ></input>
          <span className='registrUpInput1'>Password:</span>
          <input 
            className='inputRegistr1' 
            placeholder='Password'  
            type='password'
            value={password}
            onChange={(e) => 
              setPassword(e.target.value)
            }
          ></input>
          <button className='buttonRegistr1' onClick={() => Sign()}>Войти</button>
          <p className='signIn1' onClick={() => registr()}>Зарегистрироваться</p>
        </div>
      </body>
      <Alert text={alertMessage} state={alertFlag} setAlertFlag={setAlertFlag} alertStyle={alertStyle}/>
    </div>
  );
}

export default SignIn;
