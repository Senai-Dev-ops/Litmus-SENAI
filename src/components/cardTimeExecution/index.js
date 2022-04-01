import React from "react";
import "./style.css";

const CardTimeExecution = () => {
    return(
        <div className="container-execution">
            <h3 className="content-execution">Tempo de execução</h3>
            <div className="counter-execution">
                <h1 className="number-execution">71</h1><h2 className="number-execution">seg</h2>
            </div>
        </div>
    );
}

export default CardTimeExecution;
