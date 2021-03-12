import React, { useEffect, useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  TextField, 
  MenuItem
} from '@material-ui/core';
import './Create.css';
import axios from 'axios';

export default function DraggableDialog({editFlag, index, table, setEditFlag, get}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(`${table[index].name}`);
  const [doctor, setDoctor] = useState(`${table[index].doctor}`);
  const [date, setDate] = useState(`${table[index].date}`);
  const [complaints, setComplaints] = useState(`${table[index].complaints}`);
  const rangeDoctor = [
    'Чучалин Александр Николаевич',
    'Александров Никита Михайлович', 
    'Амосов Николай Михайлович', 
    'Альбрехт фон Галлер'
  ];
  
  const handleClickOpen = () => {
    setOpen(true);
    let date2 = date.split('-');
    date2 = date2[2] + '-' + date2[1] + '-' + date2[0];
    setDate(date2);
  };

  const handleClose = async() => {
    setOpen(false);
    setEditFlag(0);
    let date2 = date.split('-');
    date2 = date2[2] + '-' + date2[1] + '-' + date2[0];
    await axios.patch('http://localhost:8000/updateTable', {
      _id: table[index]._id,
      name,
      doctor,
      date: date2,
      complaints
    })
    get();
  };
  
  const handleCloseCancel = () => {
    setEditFlag(0);
  };

  useEffect(() => {
    if(editFlag) handleClickOpen();
  }, [editFlag]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Редактирование
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div className='name'>
            <span className='spanName'>Имя:</span>
            <TextField 
              type='text' 
              value={name} 
              key={`${table[index].name}`}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
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
            <TextField 
              type='text'
              type='date'
              value={date} 
              key={`${table[index].date}`}
              onChange={(e) => setDate(e.target.value)}
              variant="outlined"
            />
          </div>
          <div className='complaints'>
            <span className='spanName'>Жалобы:</span>
            <TextField 
              type='text' 
              value={complaints} 
              key={`${table[index].complaints}`} 
              onChange={(e) => setComplaints(e.target.value)}
              variant="outlined"
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