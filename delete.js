import React, { useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import axios from 'axios';

export default function DraggableDialog({deleteFlag, index, id, setDeleteFlag, get}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async() => {
    setOpen(false);
    setDeleteFlag(0);
    await axios.delete(`http://localhost:8000/deleteTable?_id=${id}`);
    get();
  };
  
  const handleCloseCancel = () => {
    setDeleteFlag(0);
  };

  useEffect(() => {
    if(deleteFlag) handleClickOpen();
  }, [deleteFlag]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Удаление
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы уверены что хотите удалить эту запись?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Подтверждаю
          </Button>
          <Button autoFocus onClick={handleCloseCancel} color="primary">
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}