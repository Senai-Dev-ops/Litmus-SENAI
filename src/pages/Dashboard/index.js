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

			<main>
				<section className="container-cards-dash">
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

					<div className="box-chart feedChart-cards">
						<ChartFeedRate />
					</div>
				</section>

				<section className="container-charts-dash">
					<div className="box-chart feedChart">
						<ChartFeedRate />
					</div>

					<div className="two-charts">
						<div className="box-chart temperature">
							<ChartTemperature />
						</div>

						<div className="box-chart rotationMin">
							<ChartArea />
						</div>
					</div>
				</section>
			</main>
		</>
	);
};
export default Dashboard;
