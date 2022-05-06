import React, { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
  const [displayDate1, setDisplayDate1] = useState("00:00:00");
  function currentTime() {
    var date = new Date(),
      displayDate;
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      displayDate = date.toLocaleTimeString("pt-BR");
    } else {
      displayDate = date.toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      });
    }
    setDisplayDate1(displayDate);
  }

  setInterval(currentTime, 1000);

  return (
    <div className="box-clock">
      <span className="title-clock">Data / Hora</span>

      <div className="content-clock">
        <span class="clock">{displayDate1}</span>

        <span className="date">02/02/2022</span>
      </div>
    </div>
  );
};

export default Clock;
