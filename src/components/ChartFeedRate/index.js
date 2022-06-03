import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Service from "../../services";
import "./style.css";

const srv = new Service();

export default function ChartFeedRate() {
  const [data, setData] = useState([]);
  const [datahora, setDatahora] = useState([]);


  async function getFeedRate() {
    await srv.machineList().then((res) => {

      for(const i in res.infos){
        setData((arr) => [...arr, res.infos[i].avanco]);

        const date = new Date(res.infos[i].datahora);
        setDatahora((arr) => [...arr, `${date.getHours()}:${date.getMinutes()}:${date.getMinutes()}`])
      }
    })
  }
  
  useEffect(() => {
    getFeedRate()
  }, []);
  

  const mockData = {
    labels: {
      categories: datahora,
    },
    series: [
      {
        name: "mm / min",
        data: data,
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
