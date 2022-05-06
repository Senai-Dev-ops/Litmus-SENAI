import Chart from "react-apexcharts";

export default function ChartArea() {
  const mockData = {
    labels: {
      categories: [
        "14:46",
        "14:47",
        "14:48",
        "14:49",
        "14:50",
        "14:51",
        "14:52",
        "14:53",
        "14:54",
        "14:55",
        "14:56",
        "14:57",
        "14:58",
        "14:59",
        "15:00",
      ],
    },
    series: [
      {
        name: "RPM",
        data: [
          100000, 99580, 97300, 91911, 91731, 99489, 85306, 96820, 100000,
          98764, 83854, 94392, 86197, 94391, 93871,
        ],
      },
    ],
  };

  const options = {
    chart: {
      toolbar: {
        show: true,
        tools: {
            download: false,
            pan: false
        }
      }
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
    <>
      <h2 style={{fontFamily: "Nunito"}}>Rotação por minuto</h2>
      <Chart
        options={{ ...options }}
        type="area"
        height="300"
        series={mockData.series}
      />
    </>
  );
};