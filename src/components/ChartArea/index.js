import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Service from '../../services';

const srv = new Service();

export default function ChartArea() {
  const [data, setData] = useState([]);
  const [datahora, setDatahora] = useState([]);

  async function getRotation() {
    await srv.machineList().then((res) => {

      for(const i in res.infos){
        setData((arr) => [...arr, res.infos[i].rotacao]);

        const date = new Date(res.infos[i].datahora);
        setDatahora((arr) => [...arr, `${date.getHours()}:${date.getMinutes()}:${date.getMinutes()}`])
      }
    })
  }
  
  useEffect(() => {
    getRotation()
  }, []);

  const mockData = {
    labels: {
      categories: datahora,
    },
    series: [
      {
        name: "RPM",
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
