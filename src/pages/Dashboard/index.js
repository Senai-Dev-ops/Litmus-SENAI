import React from "react";
import Navbar from "../../components/Header";
import CardLigDesl from "../../components/CardLigDesl";
import CardTimeExecution from "../../components/CardTimeExecution";

const Dashboard = () => {
  return (
    <>
      <Navbar />
        <CardLigDesl />
        <CardTimeExecution />
    </>
  );
};
export default Dashboard;
