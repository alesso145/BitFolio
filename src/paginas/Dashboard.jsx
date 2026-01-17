import { useState } from "react";
import TeamList from "../componentes/ListaEquipo";
import DetallePerfil from "../componentes/PerfilCompleto";
import PerfilVacio from "../componentes/PerfilVacio";

export default function Dashboard() {
  const [integranteSeleccionado, setIntegranteSeleccionado] = useState(null);

  return (
    <div className="dashboard">
      <header>
        <span>BitFolio</span>
        <span>Bienvenido, Santiago</span>
        <button>Cerrar sesión</button>
      </header>

      <main>
        <TeamList onSelect={setIntegranteSeleccionado} />

        {integranteSeleccionado ? (
          <DetallePerfil integrante={integranteSeleccionado} />
        ) : (
          <PerfilVacio />
        )}
      </main>
    </div>
  );
}

