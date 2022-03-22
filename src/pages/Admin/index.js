import React from "react";
import CustomTable from "../../components";

const Admin = () => {
  return (
    <div style={{
      width: "80%",
      marginTop: 50,
      marginLeft: 50,
      backgroundColor: "#fadede",
      padding: 2
    }}>
      <div style={{
        width: "90%",
        margin: 50
      }}>
        <CustomTable rowsNumber={5} />
      </div>
    </div>
  );

};

export default Admin;
