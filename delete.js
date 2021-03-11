import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import axios from 'axios';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({deleteFlag, index, id, setDeleteFlag}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async() => {
    setOpen(false);
    setDeleteFlag(0);
    await axios.delete(`http://localhost:8000/deleteTable?_id=${id}`);
  };
  
  const handleCloseCancel = () => {
    setDeleteFlag(0);
  };

  useEffect(() => {
    if(deleteFlag) handleClickOpen();
  }, [deleteFlag])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
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