import React from "react";
import Gauge from "react-svg-gauge";

function ChartRpm() {
  return (
    <>
      <div className="Gauge">
        <Gauge
          value={150} //valor exibido
          min={0} //valor minimo
          color={'#EA4228  '} //cor da barra
          max={300} // valor maximo do grafico
          label={"Gráfico RPM"}
          width={500} //largura
          height={500} //altura
          topLabelStyle={{  //STYLE DO TITULO, DISPLAY NONE (Para nao mostrar)
            display: "none",
          }}
          valueLabelStyle={{  //style do resultado
            textAnchor: "middle",
            fill: "#010101",
            fontStyle: "normal",
            fontSize: 45,
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            lineHeight: "normal",
            fillOpacity: 1,
          }}
          valueFormatter={number => `${number} RPM`} //formato do valor
        />
      </div>
    </>

  );
}

export default ChartRpm;