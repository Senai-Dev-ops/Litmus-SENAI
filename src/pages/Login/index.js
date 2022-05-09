import React, { useState } from "react";
import axios from "axios";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

import ChangeColors from "../../utils/Login/ChangeColors";
import LogoSenai from "../../assets/svgs/LogoSenai.svg";
import "./style.css";
import ForgotPassword from "../../components/ForgotPassword";

const Login = () => {
  const changeColors = ChangeColors();
  const navigate = useNavigate();

  const {
    icons: [colorIconEmail, colorIconLock],
  } = changeColors;
  const {
    borders: [borderColorFieldEmail, borderColorFieldPassword],
  } = changeColors;
  const { changeBorderColor, changeIconColor } = changeColors;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    axios.post("http://localhost:4000/login", {
      email: email,
      password: password
    }).then((response) => {
      if(!response.data.token) {
        console.log(response.data.error)
        return;
      }

      localStorage.setItem("accessToken", response.data.token)
      localStorage.setItem("idUser", response.data.id)
      navigate("/dashboard");
    })
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

            <form
              onSubmit={(event) => {
                event.preventDefault();
                signIn();
              }}
            >
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
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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
                <ForgotPassword />
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
