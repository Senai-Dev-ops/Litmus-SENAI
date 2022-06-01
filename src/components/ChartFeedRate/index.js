import axios from "axios";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Service from "../../services";
import "./style.css";

const srv = new Service();

export default function ChartFeedRate() {
  //   const [data, setData] = useState([
  //     {
  //       rotation: 0,
  //       datahora: "00/00/0000 00:00",
  //     },
  //   ]);

  //   const loadData = () => {
  //     const response = axios
  //       .get(`http://localhost:4000/maquina-list`)
  //       .then(({ data }) => data);

  //     return response;
  //   };

  //   useEffect(() => {
  //     loadData();
  //   }, []);

  //   console.log(loadData());

  const [rotationList, setRotationList] = useState([]);
  const rotation = [];
  const datahora = [];

  useEffect(() => {
    axios
      .get(`http://localhost:4000/maquina-list`)
      .then(({ data }) => setRotationList(data.infos));
  }, []);

  function getRotation() {
    for (let i in rotationList) {
      rotation.push(rotationList[i].rotacao);
      datahora.push(rotationList[i].datahora);
    }
  }

  getRotation();

  const mockData = {
    labels: {
      categories: datahora,
    },
    series: [
      {
        name: "mm / min",
        data: rotation,
      },
    ],
  };

  const options = {
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false,
          pan: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 10,
        inverseColors: false,
        opacityFrom: 10,
        opacityTo: 0,
        stops: [],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: mockData.labels.categories,
    },
    colors: ["#32c2a8", "#249c90"],
  };

  return (
    <div className="container-chart">
      <h2>Velocidade de avanço</h2>
      <Chart
        options={{ ...options }}
        type="area"
        height="300"
        series={mockData.series}
      />
    </div>
  );
}
