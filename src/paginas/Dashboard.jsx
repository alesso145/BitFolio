import { useState } from "react";
import TeamList from "../componentes/ListaEquipo";
import DetallePerfil from "../componentes/PerfilCompleto";
import PerfilVacio from "../componentes/PerfilVacio";

export default function Dashboard({ onLogout }) {
  // Muestra el perfil seleccionado
  const [integranteSeleccionado, setIntegranteSeleccionado] = useState(null);

  return (
    <div className="dashboard">
      {/* Header del Dashboard */}
      <header className="dashboard-header">
        <div className="header-brand">
          <img src="/BitFolioLogo.png" alt="BitFolio Logo" className="mini-logo" />
          <span className="brand-name">BitFolio</span>
        </div>
        
        <div className="header-user-actions">
          <span className="welcome-text">
            Bienvenido, <strong>Santiago</strong>
          </span>
          <button className="btn-logout" onClick={onLogout}>
            {/* Icono de salida*/}
            <span className="logout-icon">↪</span> Cerrar sesión
          </button>
        </div>
      </header>

      {/* Cuerpo principal del Dashboard */}
      <main className="dashboard-main">
        {/* Barra lateral con la lista de integrantes */}
        <TeamList onSelect={setIntegranteSeleccionado} />

        {/* Panel de detalle que cambia según la selección */}
        <div className="detail-container">
          {integranteSeleccionado ? (
            <DetallePerfil 
              key={integranteSeleccionado.id} 
              integrante={integranteSeleccionado} 
            />
          ) : (
            <PerfilVacio />
          )}
        </div>
      </main>
    </div>
  );
}