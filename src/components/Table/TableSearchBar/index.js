import RegisterDialog from "../RegisterDialog";
import "./style.css"

export default function TableSearchBar() {

    return (
        <div className="container">
            <div className="separator">
                <p style={{ fontSize: "20px" }}><strong>Usuário</strong></p>

                <input type="text" className="searchInput"></input>
                
            </div>

            <RegisterDialog />
        </div>
    );
}