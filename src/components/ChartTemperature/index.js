import axios from "axios";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Service from "../../services";

export default function ChartTemperature() {
  const [data, setData] = useState([]);
  const temperature = [];
  const datahora = [];

  useEffect(() => {
    axios
      .get(`http://localhost:4000/maquina-list`)
      .then(({ data }) => setData(data.infos));
  }, []);

  function getRotation() {
    for (let i in data) {
      temperature.push(data[i].temperatura);
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
        name: "°C",
        data: temperature,
      },
    ],
  };

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    fill: {
      colors: ["#ff6a0d"],
    },
    xaxis: {
      categories: mockData.labels.categories,
    },
  };

  return (
    <div className="container-chart">
      <h2 style={{ fontFamily: "Nunito" }}>Temperatura</h2>
      <Chart
        options={{ ...options }}
        series={mockData.series}
        type="bar"
        height="300"
      />
    </div>
  );
}
