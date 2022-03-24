import React from "react";
import ErrorImage from "../../assets/error.png";
import "./style.css";

const textDefault = "A página que você está procurando não existe.";

const Error = ({ error = "404", typeError, text = textDefault }) => {
	return (
		<main className="container-main">
			<header></header>

			<article className="content">
				<div className="text-error">
					{typeError === "code" ? (
						<h3 className="error code">{error}</h3>
					) : (
						<h3 className="error text">{error}</h3>
					)}

					<p>{text}</p>
				</div>

				<img className="image-error" src={ErrorImage} alt="Imagem de erro" />
			</article>

			<div className="custom-shape-divider-bottom-1647989821">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						class="shape-fill"
					></path>
				</svg>
			</div>
		</main>
	);
};

export default Error;
