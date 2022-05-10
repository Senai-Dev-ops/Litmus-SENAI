import React from "react";
import Header from "../../components/Header";
import CardLigDesl from "../../components/CardLigDesl";
import CardTimeExecution from "../../components/CardTimeExecution";
import Alarme from "../../components/Alarme";
import Clock from "../../components/Clock";
import ChartFeedRate from "../../components/ChartFeedRate";
import ChartTemperature from "../../components/ChartTemperature";
import ChartArea from "../../components/ChartArea";
import "./style.css";
import "./responsive.css";

const Dashboard = () => {
	return (
		<>
			<Header titleHeader="Dashboard" />

			<main style={{ padding: 20 }}>
				<div className="container-cards-dash">
					<div className="box-card status">
						<CardLigDesl />
					</div>

					<div className="box-card execution">
						<CardTimeExecution />
					</div>

					<div className="box-card alarme">
						<Alarme />
					</div>

					<div className="box-card clock">
						<Clock />
					</div>
				</div>

				<div className="box-card">
					<ChartFeedRate />
				</div>

				<div className="box-card">
					<ChartTemperature />
				</div>

				<div className="box-card">
					<ChartArea />
				</div>
			</main>
		</>
	);
};
export default Dashboard;
