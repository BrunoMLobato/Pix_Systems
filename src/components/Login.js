import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Credenciais fixas para exemplo
    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard"); // Redireciona para o dashboard
    } else {
      setError("Usuário ou senha inválidos!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>LOGIN</h1>
        <p>Entre no seu sistema.</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
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
