import React from "react";
import "./style.css";

const Clock = () => {
  return (
    <div className="box-clock">
      <span className="title-clock">Data / Hora</span>

      <div className="content-clock">
        <span class="clock">13:38</span>

        <span className="date">02/02/2022</span>
      </div>
    </div>
  );
};

export default Clock;
