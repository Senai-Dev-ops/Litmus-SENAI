import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import "./style.css";

export default function RegisterDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog maxWidth="md" fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="containerTitle">
            <p id="title">Cadastrar Usuário</p>
            <Button sx={{ borderRadius: 50 }} onClick={handleClose}>
              <Avatar>
                <CloseRoundedIcon />
              </Avatar>
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="containerForm">
            <div className="containerInputs">
              <div className="areaInput">
                <label>Nome</label>
                <input type="text"></input>
              </div>

              <div className="areaInput">
                <label>CPF</label>
                <input type="text"></input>
              </div>

              <div className="areaInput">
                <label>Tipo de conta</label>
                <select>
                  <option>Administrador</option>
                  <option>Comum</option>
                </select>
              </div>
            </div>

            <div className="containerInputs">
              <div className="areaInput">
                <label>Email</label>
                <input type="email"></input>
              </div>

              <div className="areaInput">
                <label>Data de nascimento</label>
                <input type="date"></input>
              </div>
            </div>
          </div>
        </DialogContent>

        <DialogActions
          style={{
            justifyContent: "space-between",
            marginLeft: "3.8em",
            marginBottom: "1em",
          }}
        >
          <Button id="confirmRegisterButton" onClick={handleClose}>
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>

      <Button size="medium" id="addUserButton" onClick={handleClickOpen}>
        Add User
      </Button>
    </div>
  );
}
