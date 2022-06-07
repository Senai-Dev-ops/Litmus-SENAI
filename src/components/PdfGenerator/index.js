import React, { useState } from "react";
import "./style.css";
import Service from "../../services";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import LgSenai from "../../assets/images/senai.png";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const srv = new Service();

let starts = 13;
let execution = 15;
// let avance = 12;
// let temperature = 13;
// let rotation = 22;

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const PdfGenerator = () => {
  const [rotationList, setRotationList] = useState([]);
  const [velocityList, setVelocityList] = useState([]);
  const [temperatureList, setTemperatureList] = useState([]);

  const [rotation, setRotation] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [temperature, setTemperature] = useState(0);

  async function getData() {
    await srv.machineList().then((res) => {
      for (const i in res.infos.rows) {
        setRotationList((arr) => [...arr, res.infos.rows[i].rotacao]);
        setVelocityList((arr) => [...arr, res.infos.rows[i].avanco]);
        setTemperatureList((arr) => [...arr, res.infos.rows[i].temperatura]);
      }

      var sumRotation = rotationList.reduce((sum, i) => sum + i);
      var sumVelocity = velocityList.reduce((sum, i) => sum + i);
      var sumTemperature = temperatureList.reduce((sum, i) => sum + i);

      setRotation(Math.round(sumRotation / rotationList.length));
      setVelocity(Math.round(sumVelocity / rotationList.length));
      setTemperature(Math.round(sumTemperature / rotationList.length));

      console.log(rotation, velocity, temperature);
    });
  }

  const create = () => {
//    getData();
    pdfMake.createPdf(docDefinition).open({}, window.open("", "_blank"));
  };

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
        text: `Velocidade de avanço médio: ${velocity}`,
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

  return (
    <button className="btn-pdfGenerator" type="button" onClick={create}>
      Relatório em PDF
    </button>
  );
};

export default PdfGenerator;
