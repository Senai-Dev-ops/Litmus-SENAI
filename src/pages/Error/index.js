import React from "react";
import ErrorImage from "../../assets/error.png";
import "./style.css";

const Error = ({ error, typeError, text }) => {
  return (
    <main className="container-main">
      <header></header>

      <article className="content">
        <div className="text-error">
          {typeError == "code" ? (
            <h3 className="error code">{error}</h3>
          ) : (
            <h3 className="error text">{error}</h3>
          )}

          <p>{text}</p>
        </div>

        <img className="image-error" src={ErrorImage} alt="Imagem de erro" />
      </article>
    </main>
  );
};

export default Error;
