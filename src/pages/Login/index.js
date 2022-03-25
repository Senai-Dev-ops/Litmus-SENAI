import React from "react";
import LogoSenai from "../../assets/svgs/LogoSenai.svg";
import "./style.css";

const Login = () => {
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
            <h1>Fazer Login</h1>

            <div className="fields">
              <div>
                <span>Icon</span>
                <input type="email" placeholder="Email" required />
              </div>

              <div>
                <span>Icon</span>
                <input type="password" placeholder="Senha" required />
              </div>
            </div>

            <p>Esqueci minha senha</p>

            <button type="submit">Entrar</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
