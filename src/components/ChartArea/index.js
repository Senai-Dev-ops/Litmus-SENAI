import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function ChartArea() {
  const [data, setData] = useState([]);
  const avance = [];
  const datahora = [];

  useEffect(() => {
    axios
      .get(`http://localhost:4000/maquina-list`)
      .then(({ data }) => setData(data.infos));
  }, []);

  function getRotation() {
    for (let i in data) {
      avance.push(data[i].avanco);
      datahora.push(data[i].datahora);
    }
  }

  getRotation();

  const mockData = {
    labels: {
      categories: datahora,
    },
    series: [
      {
        name: "RPM",
        data: avance,
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
        shadeIntensity: 7,
        inverseColors: false,
        opacityFrom: 10,
        opacityTo: 0,
        stops: [],
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: mockData.labels.categories,
    },
    colors: ["#713bb8"],
  };

  return (
    <div className="container-chart">
      <h2 style={{ fontFamily: "Nunito" }}>Rotação por minuto</h2>
      <Chart
        options={{ ...options }}
        type="area"
        height="300"
        series={mockData.series}
      />
    </div>
  );
}
