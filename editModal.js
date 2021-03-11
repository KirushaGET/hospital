import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import { TextField, MenuItem } from '@material-ui/core';
import Draggable from 'react-draggable';
import './Create.css';
import axios from 'axios';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({editFlag, index, table, setEditFlag}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(`${table[index].name}`);
  const [doctor, setDoctor] = useState(`${table[index].doctor}`);
  const [date, setDate] = useState(`${table[index].date}`);
  const [complaints, setComplaints] = useState(`${table[index].complaints}`);
  const rangeDoctor = ['Чебурашка', 'Крокодил Гена', 'Шапокляк', 'Крыса Лариса'];
  
  const handleClickOpen = () => {
    setOpen(true);
    let date2 = date.split('-');
    date2 = date2[2] + '-' + date2[1] + '-' + date2[0];
    console.log(date2)
    setDate(date2);
  };

  const handleClose = async() => {
    setOpen(false);
    setEditFlag(0);
    let date2 = date.split('-');
    date2 = date2[2] + '-' + date2[1] + '-' + date2[0];
    console.log(name,doctor, date2, complaints);
    await axios.patch('http://localhost:8000/updateTable', {
      _id: table[index]._id,
      name,
      doctor,
      date: date2,
      complaints
    })
  };
  
  const handleCloseCancel = () => {
    setEditFlag(0);
  };

  useEffect(() => {
    if(editFlag) handleClickOpen();
  }, [editFlag])
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Редактирование
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div className='name'>
            <span className='spanName'>Имя:</span>
            <input 
              type='text' 
              value={name} 
              key={`${table[index].name}`}
              onChange={(e) => setName(e.target.value)}
            />
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
              type='text'
              type='date'
              value={date} 
              key={`${table[index].date}`}
              onChange={(e) => setDate(e.target.value)}
             />
          </div>
          <div className='complaints'>
            <span className='spanName'>Жалобы:</span>
            <input 
              type='text' 
              value={complaints} 
              key={`${table[index].complaints}`} 
              onChange={(e) => setComplaints(e.target.value)}
            />
          </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Сохранить
          </Button>
          <Button autoFocus onClick={handleCloseCancel} color="primary">
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}