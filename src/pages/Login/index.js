import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoSenai from "../../assets/svgs/LogoSenai.svg";
import "./style.css";

const Login = () => {
  const [colorIconEmail, setColorIconEmail] = useState("var(--gray-secondary)");
  const [colorIconLock, setColorIconLock] = useState("var(--gray-secondary)");

  const changeIconColor = (focus, icon) => {
    if (icon === "email") {
      setColorIconEmail(() =>
        focus ? "var(--primary)" : "var(--gray-secondary)"
      );
    } else if (icon === "lock") {
      setColorIconLock(() =>
        focus ? "var(--primary)" : "var(--gray-secondary)"
      );
    }
  };

  const [borderColorFieldEmail, setBorderColorFieldEmail] = useState(
    "var(--gray-secondary)"
  );
  const [borderColorFieldPassword, setBorderColorFieldPassword] = useState(
    "var(--gray-secondary)"
  );

  const changeBorderColor = (focus, field) => {
    if (field === "email") {
      setBorderColorFieldEmail(() =>
        focus ? "var(--primary)" : "var(--gray-secondary)"
      );
    } else if (field === "password") {
      setBorderColorFieldPassword(() =>
        focus ? "var(--primary)" : "var(--gray-secondary)"
      );
    }
  };

  return (
    <main className="login">
      <section className="bg-image"></section>

      <section className="container-form">
        <div className="box-content">
          <div className="content">
            <div className="box-logo">
              <img
                src={LogoSenai}
                alt="Logo Senai Vermelho"
                className="logo-senai"
              />
            </div>

            <form>
              <div className="title">
                <h1>Fazer login</h1>
              </div>

              <div className="fields">
                <div
                  className="field"
                  style={{ borderColor: borderColorFieldEmail }}
                >
                  <EmailOutlinedIcon
                    className="icon-field"
                    style={{ color: colorIconEmail }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onFocus={() => {
                      changeBorderColor(true, "email");
                      changeIconColor(true, "email");
                    }}
                    onBlur={() => {
                      changeBorderColor(false, "email");
                      changeIconColor(false, "email");
                    }}
                  />
                </div>

                <div
                  className="field"
                  style={{ borderColor: borderColorFieldPassword }}
                >
                  <LockOutlinedIcon
                    className="icon-field"
                    style={{ color: colorIconLock }}
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    required
                    onFocus={() => {
                      changeBorderColor(true, "password");
                      changeIconColor(true, "lock");
                    }}
                    onBlur={() => {
                      changeBorderColor(false, "password");
                      changeIconColor(false, "lock");
                    }}
                  />
                </div>
              </div>

              <div className="box-link">
                <button type="button" className="false-link">
                  Esqueci minha senha
                </button>
              </div>

              <button type="submit" className="btn">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
