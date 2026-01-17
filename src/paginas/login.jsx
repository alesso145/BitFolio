import { useState } from "react";

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    // Validación de ejemplo
    if (usuario === "admin" && password === "1234") {
      onLogin(); // Activa el estado en App.jsx
    } else {
      alert("Credenciales incorrectas.");
    }
  };

  return (
    <div className="pagina-login">
      <div className="carta-login">
        <img src="/BitFolioLogo.png" alt="Logo BitFolio" />
        <h1>BitFolio</h1>
        <p>Developer Team Profiles</p>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="USUARIO" 
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="CONTRASEÑA" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">INGRESAR</button>
        </form>
      </div>
    </div>
  );
}