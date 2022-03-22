import Button from "@mui/material/Button";

export default function TableSearchBar() {

    return (
        <div style={{
            border: "1px 1px 0 1px solid black",
            padding: "1em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div className="separator" style={{
                display: "flex",
                flexDirection: "row",
                width: "30%"
            }}>
                <p style={{ fontSize: "20px" }}><strong>Usuário</strong></p>

                <input type="text" style={{
                    marginLeft: "5em",
                    width: "60%",
                    height: "2.5em",
                    padding: "5px",
                    border: "0.4px solid #7a7a7a",
                    borderRadius: 10,
                }}></input>
            </div>

            <Button size="medium" style={{
                backgroundColor: "var(--red)",
                color: "white",
                borderRadius: "20px",
                width: "130px"
            }}>Add User</Button>
        </div>
    );
}