import React from "react";
import "./style.css";

const CardLigDesl = () => {
  return (
    <div className="container-lig-off">
      <h3 className="content-lig-off">Desligado / Ligado</h3>

      <div className="box-switch-lig-off">
        <label className="switch-lig-off">
          <input type="checkbox" />
          <span className="slider-lig-off" />
        </label>
      </div>
    </div>
  );
};

export default CardLigDesl;
