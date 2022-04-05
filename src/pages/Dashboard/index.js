import React from "react";
import Header from "../../components/Header";
import CardLigDesl from "../../components/CardLigDesl";
import CardTimeExecution from "../../components/CardTimeExecution";
import ChartRpm from "../../components/ChartRpm"

const Dashboard = () => {
  return (
    <>
      <Header titleHeader="Dashboard" />
      <CardLigDesl />
      <CardTimeExecution />
      <ChartRpm />
    </>
  );
};
export default Dashboard;
