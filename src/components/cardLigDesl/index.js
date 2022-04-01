import React from "react";
import "./style.css";

const CardLigDesl = () => {
  return (
    <div className="container-lig-off">
        <h3 className="content-lig-off">Desligado / Ligado</h3>
        <label className="switch-lig-off">
          <input/>
          <span className="slider-lig-off" />
        </label>
    </div>
  );
};

export default CardLigDesl;
