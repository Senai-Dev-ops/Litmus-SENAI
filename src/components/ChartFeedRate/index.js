import Chart from "react-apexcharts";
import "./style.css";

export default function ChartFeedRate() {
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
				name: "mm / min",
				data: [
					2.13, 1.23, 0.33, 0.61, 0.82, 1.54, 3.54, 4.98, 4.32, 3.21, 2.79,
					3.02, 4, 4.76,
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
