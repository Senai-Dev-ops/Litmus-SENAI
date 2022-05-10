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
import axios from "axios";

export default function DeleteDialog({ open, onClose, userInfo }) {

    const handleClose = () => {
        onClose();
    };

    function deleteUser() {
        const requestingId = localStorage.getItem("idUser");
        const headers = { "accessToken": localStorage.getItem("accessToken") }
        axios.post(`http://localhost:4000/delete-user/${requestingId}/${userInfo.id}`, {}, { headers: headers })
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <div>
            <Dialog maxWidth="md" fullWidth={true} open={open} onClose={handleClose}>
                <DialogTitle>
                    <div className="containerTitle">
                        <p id="title">Excluir usuário</p>
                        <Button sx={{ borderRadius: 50 }} onClick={handleClose}>
                            <Avatar>
                                <CloseRoundedIcon />
                            </Avatar>
                        </Button>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <p className="text">Você realmente deseja excluir este usuário?</p>
                </DialogContent>

                <DialogActions
                    style={{
                        marginRight: "1em",
                        marginBottom: "1em",
                    }}
                >
                    <Button id="cancelDeleteButton" onClick={handleClose}>Cancelar</Button>
                    <Button id="confirmDeleteButton" onClick={() => {
                        deleteUser()
                        handleClose()
                    }}>Confirmar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
