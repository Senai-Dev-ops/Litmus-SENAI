import React from "react";
import Gauge from "react-svg-gauge";

function ChartRpm() {
  return (
    <>
        <Gauge
          value={150} //valor exibido
          min={0} //valor minimo
          color={'#EA4228  '} //cor da barra
          max={300} // valor maximo do grafico
          label={"Gráfico RPM"}
          topLabelStyle={{  //STYLE DO TITULO, DISPLAY NONE (Para nao mostrar)
            display: "none",
          }}
          height={210}
          valueLabelStyle={{  //style do resultado
            textAnchor: "middle",
            fill: "#010101",
            fontStyle: "normal",
            fontSize: 40,
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            lineHeight: "normal",
            fillOpacity: 1,
          }}
          valueFormatter={number => `${number} RPM`} //formato do valor
        />
    </>

  );
}

export default ChartRpm;