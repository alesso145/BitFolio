import { useState } from "react";
import { User, Lock } from "lucide-react";
import { equipo } from "../data/equipo"; // Importamos el array de integrantes
import "./Login.css";

function Login({ onLogin }) {
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buscamos al integrante por su número de cédula
    const usuarioEncontrado = equipo.find((u) => u.cedula === cedula);

    // Validación: si existe el usuario y la contraseña coincide
    if (usuarioEncontrado && password === "1234") {
      onLogin(usuarioEncontrado); // Enviamos el objeto completo del usuario al App.jsx
    } else {
      alert("Cédula o contraseña incorrecta. Intenta de nuevo.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src="/imagenes/BitFolioLogo.png" alt="BitFolio" className="login-logo" />

        <h1>BitFolio</h1>
        <p>Developer Team Profiles</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">
              <User size={18} strokeWidth={2} />
            </span>
            <input
              type="text"
              placeholder="NÚMERO DE CÉDULA"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="icon">
              <Lock size={18} strokeWidth={2} />
            </span>
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            INGRESAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;