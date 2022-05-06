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

export default function EditDialog({ open, onClose, userInfo }) {

  const handleClose = () => {
    onClose();
  };

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
                <input type="text" defaultValue={userInfo.name}/>
              </div>

              <div className="areaInput">
                <label>CPF</label>
                <input type="text" pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}" maxLength="14" onKeyPress={(evt) => {
                  var key = (evt.which) ? evt.which : evt.keyCode

                  if (key > 31 && (key < 48 || key > 57)) {
                    evt.preventDefault();
                  }
                }} onBlur={(evt) => {
                  evt.target.value = evt.target.value.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]+)/, "$1.$2.$3-$4")
                }} defaultValue={userInfo.cpf}/>
              </div>

              <div className="areaInput">
                <label>Data de nascimento</label>
                <input type="date" defaultValue={userInfo.birthdayDate} />
              </div>
            </div>

            <div className="containerInputs">
              <div className="areaInput">
                <label>Email</label>
                <input type="email" pattern="[a-z0-9].+\@[a-z]+\.[a-z]+(\.[a-z]+)?" defaultValue={userInfo.email}/>
              </div>


              <div className="areaInput">
                <label>Tipo de conta</label>
                <select defaultValue={userInfo.accountType}>
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
          <Button id="confirmEditButton" onClick={handleClose}>
            Editar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
