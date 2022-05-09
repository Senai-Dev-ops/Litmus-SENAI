import React from "react";
import Header from "../../components/Header";
import CardLigDesl from "../../components/CardLigDesl";
import CardTimeExecution from "../../components/CardTimeExecution";
import ChartRpm from "../../components/ChartRpm";
import Alarme from "../../components/Alarme";
import Clock from "../../components/Clock";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Paper } from "@material-ui/core";
import ChartFeedRate from "../../components/ChartFeedRate";
import ChartTemperature from "../../components/ChartTemperature";
import ChartArea from "../../components/ChartArea";

import "./style.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F4F4F4",
  padding: theme.spacing(1),
  borderRadius: 10,
  filter: "drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.25))",
}));

const Dashboard = () => {
  return (
    <>
      <Header titleHeader="Dashboard" />

      <main style={{ padding: 20 }}>
        <div className="container-cards-dash">
          <div className="box-card">
            <CardLigDesl />
          </div>

          <div className="box-card">
            <CardTimeExecution />
          </div>

          <div className="box-card">
            <Alarme />
          </div>
        </div>

        <div></div>

        <div></div>

        <div>
          <Clock />
        </div>

        <div>
          <ChartFeedRate />
        </div>

        <div>
          <ChartTemperature />
        </div>

        <div>
          <ChartArea />
        </div>

        {/* <Grid container spacing={4} rowSpacing={4}>
          <Grid
            container
            item
            justifyContent={"center"}
            spacing={4}
            rowSpacing={4}
          >
            <Grid item xs="auto">
              <Item>
                <CardLigDesl />
              </Item>
            </Grid>

            <Grid item xs="auto">
              <Item>
                <CardTimeExecution />
              </Item>
            </Grid>

            <Grid item xs="auto" md={4}>
              <Item>
                <Alarme />
              </Item>
            </Grid>

            <Grid item xs="auto" md={4}>
              <Item>
                <Clock />
              </Item>
            </Grid>
          </Grid>

          <Grid
            container
            item
            spacing={4}
            justifyContent="center"
            rowSpacing={4}
          >
            <Grid item xs="auto" md={4}>
              <Item>
                <ChartFeedRate />
              </Item>
            </Grid>

            <Grid item xs="auto" md={4}>
              <Item>
                <ChartTemperature />
              </Item>
            </Grid>

            <Grid item xs="auto" md={4}>
              <Item>
                <ChartArea />
              </Item>
            </Grid>
          </Grid>
        </Grid> */}
      </main>
    </>
  );
};
export default Dashboard;
