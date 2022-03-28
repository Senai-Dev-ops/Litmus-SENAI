import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import IconButton from "@mui/material/IconButton";
import { Avatar, Button, Dialog, DialogContent, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
import "./style.css"
import EditDialog from "../EditDialog";

// function SimpleDialog(props) {
//   const { onClose, open , user} = props;

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <Dialog keepMounted onClose={handleClose} open={open}>
//       <DialogTitle className="dialogTitle"><strong>Usuário:</strong> {user}</DialogTitle>
//       <DialogContent className="dialogContent">
//         <Button size="medium" onClick={console.log("yahuu!")} id="firstDialogButton" >
//           <Avatar><DeleteOutlineOutlinedIcon /></Avatar>
//           <p className="dialogButtonText">Excluir usuário</p>
//         </Button>
//         <br />
//         <Button size="medium" onClick={console.log("yahasduu!")} >
//           <Avatar><ModeEditOutlineOutlinedIcon /></Avatar>
//           <p className="dialogButtonText">Editar usuário</p>
//         </Button>
//       </DialogContent>
//     </Dialog>
//   );
// }

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   user: PropTypes.string.isRequired,
// };

/*
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
*/

export default function OptionsDialog() {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const [openEdit, setOpenEdit] = useState(false);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
  }

  const handleCloseEdit = () => {
    setOpenEdit(false);
  }

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>

      <EditDialog open={openEdit} onClose={handleCloseEdit} />

      <Menu
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleOpenEdit}><Avatar><ModeEditOutlineOutlinedIcon /></Avatar>&nbsp;&nbsp;Editar usuário</MenuItem>
        <MenuItem onClick={handleClose}><Avatar><DeleteOutlineOutlinedIcon /></Avatar>&nbsp;&nbsp;Excluir usuário</MenuItem>
      </Menu>

    </div>
  );
}
