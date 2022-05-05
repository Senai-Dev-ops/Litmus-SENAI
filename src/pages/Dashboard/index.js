import React from "react";
import Header from "../../components/Header";
import CardLigDesl from "../../components/CardLigDesl";
import CardTimeExecution from "../../components/CardTimeExecution";
import ChartRpm from "../../components/ChartRpm";
import Alarme from "../../components/Alarme";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Paper } from "@material-ui/core";
import ChartFeedRate from "../../components/ChartFeedRate";
import ChartTemperature from "../../components/ChartTemperature";
import ChartArea from "../../components/ChartArea";

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

      <div style={{ padding: 30 }}>
        <Grid container spacing={4} rowSpacing={4}>
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
          </Grid>

          <Grid
            container
            item
            spacing={4}
            justifyContent={"center"}
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

            {/* <Grid item xs="auto" md="4">
            <Item><ChartRpm /></Item>
          </Grid> */}
          </Grid>

          <Grid item xs="auto" md={4}>
            <Item>
              <Alarme />
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Dashboard;
