import React from "react";
import "./style.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import LgSenai from "../../assets/images/senai.png";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// playground requires you to assign document definition to a variable called dd

let starts = 13;
let execution = 15;

var docDefinition = {
	content: [
		{ image: LgSenai, alignment: "center" },
		{
			text: "Relatório máquina - CNC SR-20J Type C ",
			alignment: "center",
			margin: [5, 26],
			style: "headerTitle",
		},

		{
			columns: [
				{
					text: `Quantidade de starts: ${starts}`,
					style: "infosMachine",
				},

				{
					text: `Tempo em execução: ${execution}s`,
					style: "infosMachine",
				},
			],

			alignment: "center",
			columnGap: 10,
		},

		{
			columns: ["Left part", { text: "Right part", alignment: "right" }],
		},
	],

	styles: {
		headerTitle: {
			fontSize: 16,
			bold: true,
		},
		infosMachine: {
			bold: true,
		},
	},
};

const PdfGenerator = () => {
	const create = () => {
		pdfMake.createPdf(docDefinition).open({}, window.open("", "_blank"));
	};

	return (
		<button className="btn-pdfGenerator" type="button" onClick={create}>
			Relatório em PDF
		</button>
	);
};

export default PdfGenerator;
