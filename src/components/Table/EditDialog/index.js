import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./style.css";
import Service from "../../../services";
import { useState } from "react";
import { toast } from "react-toastify";

const srv = new Service();

export default function EditDialog({ open, onClose, userInfo }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [dataNasc, setDataNasc] = useState("");

  const handleClose = () => {
    onClose();
  };

  async function editUser() {
    const requestingId = localStorage.getItem("idUser");
    const headers = { "accessToken": localStorage.getItem("token") }
    
    await srv.editUser(requestingId, userInfo.idUsuario, {
      nome: (name === "") ? userInfo.nome : name,
      email: (email === "") ? userInfo.email : email,
      CPF: (cpf === "") ? userInfo.cpf : cpf,
      ADM: (userInfo.accountType === "Administrador") ? true : false,
      DATANASC: (dataNasc === "") ? userInfo.DATANASC : dataNasc
    }, headers).then((res) => {
      toast.info(res.message, {autoClose: 1500})

      setInterval(() => {
        window.location.reload()
      }, 2000)
    }).catch((err) => {
      toast.error(err.response.data.error)
    })
    
  }

  return (
    <div>
      <Dialog maxWidth="md" fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="containerTitle">
            <p id="title">Editar usuário</p>
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
                <input type="text" defaultValue={userInfo.name} onChange={(evt) => {
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
                }} defaultValue={userInfo.cpf}/>
              </div>

              <div className="areaInput">
                <label>Data de nascimento</label>
                <input type="date" defaultValue={userInfo.birthdayDate} onChange={(evt) => {
                  setDataNasc(evt.target.value)
                }}/>
              </div>
            </div>

            <div className="containerInputs">
              <div className="areaInput">
                <label>Email</label>
                <input type="email" defaultValue={userInfo.email} onChange={(evt) => {
                  setEmail(evt.target.value)
                }}/>
              </div>


              <div className="areaInput">
                <label>Tipo de conta</label>
                <select defaultValue={userInfo.accountType} onChange={(evt) => {
                    userInfo.accountType = evt.target.value
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
          <Button id="confirmEditButton" onClick={() => {
            editUser()
            handleClose()
          }}>
            Editar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
