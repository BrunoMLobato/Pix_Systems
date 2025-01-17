import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>LOGIN</h1>
        <p>Entre no seu sistema.</p>
        <form>
          <div className="input-group">
            <label>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Usuário" />
            </label>
          </div>
          <div className="input-group">
            <label>
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Senha" />
            </label>
          </div>
          <a href="#" className="forgot-password">
            Esqueci minha senha
          </a>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
