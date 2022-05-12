import React from "react";
import CustomTable from "../../components/Table/index";
import Header from "../../components/Header";
import "./style.css";

const Admin = () => {
  return (
    <div>
      <Header titleHeader="Gerenciamento" userName={localStorage.getItem("user")}/>

      <div className="containerTable">
        <div
          style={{
            width: "90%",
            margin: 50,
          }}
        >
          <CustomTable rowsNumber={7} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
