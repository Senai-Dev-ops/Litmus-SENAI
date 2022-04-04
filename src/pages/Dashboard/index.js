import React from "react";
import Header from "../../components/Header";
import CardLigDesl from "../../components/CardLigDesl";
import CardTimeExecution from "../../components/CardTimeExecution";

const Dashboard = () => {
  return (
    <>
      <Header titleHeader="Dashboard" />
      <CardLigDesl />
      <CardTimeExecution />
    </>
  );
};
export default Dashboard;
