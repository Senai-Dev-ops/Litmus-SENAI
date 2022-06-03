import React, { useEffect, useState } from "react";
import AlarmeIcon from "../../assets/svgs/alarm-clock.svg";
import "./style.css";

const Alarme = () => {
  // const [isChecked, setIsChecked] = useState(false);

	// const handleCheckbox = () => {
	// 	setIsChecked(!isChecked);
	// };

	// useEffect(() => {
	// 	statusMachine(isChecked);
	// }, [isChecked]);

  // const [time, setTime] = useState(0);

	// useEffect(() => {
	// 	let interval = null;

	// 	if (start) {
	// 		setTime(0);
	// 		interval = setInterval(() => {
	// 			setTime((time) => time + 10);
	// 		}, 10);
	// 	} else {
	// 		clearInterval(interval);
	// 	}
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, [start]);

  return (
    <div className="box-alarme">
      <div className="space-alarme-check">
        <span className="title-alarme">Alarme</span>

        <div className="box-switch-alarme">
          <label className="switch-lig-off">
            <input
              type="checkbox" 
              // checked={isChecked}
						  // onChange={handleCheckbox}
            />
            <span className="slider-lig-off" />
          </label>
        </div>
      </div>

      <div className="box-alarmeIcon-time">
        <img src={AlarmeIcon} alt="relógio do alarme" />

        <span className="time-alarme">00:00</span>
      </div>
    </div>
  );
};

export default Alarme;
