import Chart from "react-apexcharts";

export default function ChartTemperature() {
  const mockData = {
    labels: {
      categories: [
        "8/2/22 - 14:46",
        "8/2/22 - 14:47",
        "8/2/22 - 14:48",
        "8/2/22 - 14:49",
        "8/2/22 - 14:50",
        "8/2/22 - 14:51",
        "8/2/22 - 14:52",
        "8/2/22 - 14:53",
        "8/2/22 - 14:54",
        "8/2/22 - 14:55",
        "8/2/22 - 14:56",
        "8/2/22 - 14:57",
        "8/2/22 - 14:58",
        "8/2/22 - 14:59",
        "8/2/22 - 15:00",
      ],
    },
    series: [
      {
        name: "°C",
        data: [
          50.6, 49.4, 53.9, 57.2, 54.1, 46.8, 51.3, 61.3, 58.4,
          55.7, 54.5, 63.9, 46.9, 41, 57.3,
        ],
      },
    ],
  };

  const options = {
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
    }
  };

  return (
    <>
      <h2 style={{fontFamily: "Nunito"}}>Temperatura</h2>
      <Chart
        options={{...options}}
        series={mockData.series}
        type="bar"
        height="300"
      />
    </>
  );
};
