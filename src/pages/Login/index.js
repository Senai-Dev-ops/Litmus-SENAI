import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoSenai from "../../assets/svgs/LogoSenai.svg";
import "./style.css";
import { purple, red } from "@mui/material/colors";

const Login = () => {
  const focusField = (i) => {
    document.getElementsByClassName("field")[i].style.borderColor = "#000";
  };

  const focusOut = (i) => {
    document.getElementsByClassName("field")[i].style.borderColor =
      "var(--gray-secondary)";
  };

  // const fieldStyles = {
  //   borderColor: fieldFocus ? red : purple,
  // };

  return (
    <main className="login">
      <section className="bg-image"></section>

      <section className="container-form">
        <div className="content">
          <img
            src={LogoSenai}
            alt="Logo Senai Vermelho"
            className="logo-senai"
          />

          <form>
            <div className="title">
              <h1>Fazer Login</h1>
            </div>

            <div className="fields">
              <div className="field">
                <EmailOutlinedIcon className="icon-field" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onFocus={() => {
                    const a = (document.getElementsByClassName(
                      "field"
                    )[0].style.borderColor = "#000");
                  }}
                  onBlur={() => {
                    const a = (document.getElementsByClassName(
                      "field"
                    )[0].style.borderColor = "var(--gray-secondary)");
                  }}
                />
              </div>

              <div className="field">
                <LockOutlinedIcon className="icon-field" />
                <input
                  type="password"
                  placeholder="Senha"
                  required
                  onFocus={() => {
                    const a = (document.getElementsByClassName(
                      "field"
                    )[1].style.borderColor = "#000");
                  }}
                  onBlur={() => {
                    const a = (document.getElementsByClassName(
                      "field"
                    )[1].style.borderColor = "var(--gray-secondary)");
                  }}
                />
              </div>
            </div>

            <div className="link">
              <p>Esqueci minha senha</p>
            </div>

            <button type="submit">Entrar</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
