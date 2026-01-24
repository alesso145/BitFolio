import { useState } from "react";
import ListaEquipo from "../componentes/ListaEquipo";
import PerfilVacio from "../componentes/PerfilVacio";
import PerfilCompleto from "../componentes/PerfilCompleto";
import "../App.css";

export default function Dashboard() {
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

  return (
    <div className="dashboard">

      {/* NAVBAR */}
      <header className="navbar">
  <div className="navbar-left">
    <img src="/BitFolioLogo.png" alt="Logo" className="navbar-logo" />
    <span className="logo">BitFolio</span>
  </div>

        <div className="navbar-right">
          <span>Bienvenido, <b>Santiago</b></span>
          <button className="logout">Cerrar sesión</button>
        </div>
      </header>

      {/* CUERPO */}
      <div className="dashboard-body">
        <ListaEquipo onSelect={setPersonaSeleccionada} />

        {personaSeleccionada ? (
          <PerfilCompleto persona={personaSeleccionada} />
        ) : (
          <PerfilVacio />
        )}
      </div>

    </div>
  );
}