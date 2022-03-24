import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from "@mui/material/IconButton";
import { Avatar, Button, Dialog, DialogContent, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
import "./style.css"

function SimpleDialog(props) {
  const { onClose, open , user} = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog keepMounted onClose={handleClose} open={open}>
      <DialogTitle className="dialogTitle"><strong>Usuário:</strong> {user}</DialogTitle>
      <DialogContent className="dialogContent">
        <Button size="medium" onClick={console.log("yahuu!")} id="firstDialogButton" >
          <Avatar><DeleteOutlineOutlinedIcon /></Avatar>
          <p className="dialogButtonText">Excluir usuário</p>
        </Button>
        <br />
        <Button size="medium" onClick={console.log("yahasduu!")} >
          <Avatar><ModeEditOutlineOutlinedIcon /></Avatar>
          <p className="dialogButtonText">Editar usuário</p>
        </Button>


      </DialogContent>

      {/* <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DeleteOutlineOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Excluir usuário" />
        </ListItem>

        <ListItem button onClick={console.log("yahuu!")}>
          <ListItemAvatar>
            <Avatar>
              <ModeEditOutlineOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Editar usuário" />
        </ListItem>
      </List> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
};

export default function OptionsDialog({user}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <MoreHorizIcon />
      </IconButton>

      <SimpleDialog open={open} onClose={handleClose} user={user} />
    </div>
  );
}
