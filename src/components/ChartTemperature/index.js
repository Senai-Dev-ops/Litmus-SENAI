import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import Service from "../../services";

const srv = new Service();

export default function ChartTemperature() {
  const [data, setData] = useState([]);
  const [datahora, setDatahora] = useState([]);

  async function getTemperature() {
    await srv.machineList().then((res) => {

      for(const i in res.infos){
        setData((arr) => [...arr, res.infos[i].temperatura]);

        const date = new Date(res.infos[i].datahora);
        setDatahora((arr) => [...arr, `${date.getHours()}:${date.getMinutes()}:${date.getMinutes()}`])
      }
    })
  }
  
  useEffect(() => {
    getTemperature()
  }, []);

  const mockData = {
    labels: {
      categories: datahora,
    },
    series: [
      {
        name: "°C",
        data: data,
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
        horizontal: false,
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
