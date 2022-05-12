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
import Service from "../../../services";

const srv = new Service();

export default function RegisterDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [admin, setAdmin] = useState(true);
  const [dataNasc, setDataNasc] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function registerUser(){
    const requestingId = localStorage.getItem("idUser");
    const headers = {"accessToken": localStorage.getItem("token")}

    const response = await srv.registerUser(requestingId, {
      nome: name,
      email: email,
      senha: "senai@115",
      CPF: cpf,
      ADM: admin,
      DATANASC: dataNasc
    }, headers)

    console.log(response);
  }

  return (
    <div>
      <Dialog maxWidth="md" fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="containerTitle">
            <p id="title">Cadastrar usuário</p>
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
                <input type="text" onChange={(evt) => {
                  setName(evt.target.value)
                }}/>
              </div>

              <div className="areaInput">
                <label>CPF</label>
                <input type="text" maxLength="14" onKeyPress={(evt) => {
                  var key = (evt.which) ? evt.which : evt.keyCode

                  if (key > 31 && (key < 48 || key > 57)) {
                    evt.preventDefault();
                  }
                }} onBlur={(evt) => {
                  evt.target.value = evt.target.value.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]+)/, "$1.$2.$3-$4")
                  setCPF(evt.target.value)
                }} />
              </div>

              <div className="areaInput">
                <label>Data de nascimento</label>
                <input type="date" onChange={(evt) => {
                  setDataNasc(evt.target.value)
                }}/>
              </div>
            </div>

            <div className="containerInputs">
              <div className="areaInput">
                <label>Email</label>
                <input type="email" onChange={(evt) => {
                  setEmail(evt.target.value)
                }}/>
              </div>

              <div className="areaInput">
                <label>Tipo de conta</label>
                <select onChange={(evt) => {
                    setAdmin((evt.target.value == "Comum") ? false : true)
                  }}>
                  <option>Administrador</option>
                  <option>Comum</option>
                </select>
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
          <Button id="confirmRegisterButton" onClick={() => {
            handleClose();
            registerUser();
          }}>
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
