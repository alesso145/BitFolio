import { useState } from "react";
import { LogOut, User as UserIcon } from "lucide-react"; 
import ListaEquipo from "../componentes/ListaEquipo";
import PerfilVacio from "../componentes/PerfilVacio";
import PerfilCompleto from "../componentes/PerfilCompleto";

// Recibimos 'user' desde App.jsx
export default function Dashboard({ onLogout, user }) {
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="navbar-left">
          <img src="/imagenes/BitFolioLogo.png" alt="Logo" className="navbar-logo" />
          <span className="logo">BitFolio</span>
        </div>

        <div className="navbar-right">
          <div className="user-info">
            <UserIcon size={18} className="icon-user" />
            {/* Mostramos el nombre dinámico del usuario logueado */}
            <span>Bienvenido, <b>{user.nombre}</b></span>
          </div>
          <button className="logout" onClick={onLogout}>
            <LogOut size={16} /> Cerrar sesión
          </button>
        </div>
      </header>

      <div className="dashboard-body">
        <ListaEquipo
          onSelect={setPersonaSeleccionada}
          seleccionado={personaSeleccionada}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />

        {personaSeleccionada ? (
          <PerfilCompleto persona={personaSeleccionada} />
        ) : (
          <PerfilVacio />
        )}
      </div>
    </div>
  );
}