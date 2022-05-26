import React from "react";
import "./style.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import LgSenai from "../../assets/images/senai.png";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

let starts = 13;
let execution = 15;
let avance = 12;
let temperature = 13;
let rotation = 22;

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
console.log(today.toLocaleDateString())

var docDefinition = {
  pageSize: "A4",
  pageMargins: [40, 60, 40, 60],
  pages: 2,

  footer: [
    {
      text: `Exportado em ${today.toLocaleDateString()}`,
      alignment: "right",
      margin: [0, 0, 16, 0],
      style: "footer",
      color: "#000",
    },

    {
      text: "Escola Senai Suíço-Brasileira Paulo Ernesto Tolle - 2022",
      alignment: "center",
      style: "footer",
      margin: [0, 12, 0, 0],
    },
  ],

  content: [
    {
      image: LgSenai,
      alignment: "center",
      margin: [0, 10],
    },

    {
      text: "Relatório máquina - CNC SR-20J Type C",
      margin: [5, 26],
      alignment: "center",
      style: "headerTitle",
    },

    {
      text: `Quantidade de starts: ${starts}`,
      margin: [60, 26], 
	  style: "infosMachine",
      alignment: "left",
    },

    {
      text: `Tempo em execução: ${execution}s`,
      margin: [60, 26],
      style: "infosMachine",
      alignment: "left",
    },

    {
      text: `Velocidade de avanço médio: ${avance}`,
      margin: [60, 26],
      style: "infosMachine",
      alignment: "left",
    },

    {
      text: `Temperatura média: ${temperature}`,
      margin: [60, 26],
      style: "infosMachine",
      alignment: "left",
    },

    {
      text: `Rotação por minuto média: ${rotation}`,
      margin: [60, 26],
      style: "infosMachine",
      alignment: "left",
    },
  ],

  styles: {
    headerTitle: {
      fontSize: 20,
      bold: true,
    },

    infosMachine: {
      fontSize: 14,
      bold: false,
      italics: true,
    },

    footer: {
      color: "#535659",
      fontSize: 12,
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
