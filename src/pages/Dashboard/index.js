import React from "react";
import Header from "../../components/Header";
import CardLigDesl from "../../components/CardLigDesl";
import CardTimeExecution from "../../components/CardTimeExecution";
import ChartRpm from "../../components/ChartRpm"
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Paper } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F4F4F4',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 10,
  filter: "drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.25))"
}));

const Dashboard = () => {
  return (
    <>
      <Header titleHeader="Dashboard" />

      <div style={{ padding: 15}}>
        <Grid container spacing={3} rowSpacing={4}>
          <Grid item xs="auto">
            <Item><CardLigDesl /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>
          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><CardTimeExecution /></Item>
          </Grid>

          <Grid item xs="auto">
            <Item><ChartRpm /></Item>
          </Grid>

        </Grid>
      </div>

    </>
  );
};
export default Dashboard;
