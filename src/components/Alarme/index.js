import React from "react";
import AlarmeIcon from "../../assets/images/alarm-clock.svg";
import "./style.css";

const Alarme = () => {
  return (
    <div className="box-alarme">
      <div className="space-alarme-check">
        <span className="title-alarme">Alarme</span>

        <button>Button</button>
      </div>

      <div className="box-alarmeIcon-time">
        <img src={AlarmeIcon} alt="relógio do alarme" />

        <span className="time-alarme">00:00</span>
      </div>
    </div>
  );
};

export default Alarme;
