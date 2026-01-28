import { equipo } from "../data/equipo";
import { Search } from "lucide-react"; 

export default function ListaEquipo({ onSelect, seleccionado, busqueda, setBusqueda }) {
  
  // Lógica de filtrado por nombre o habilidades
  const equipoFiltrado = equipo.filter((integrante) => {
    const termino = busqueda.toLowerCase();
    return (
      integrante.nombre.toLowerCase().includes(termino) ||
      integrante.habilidadesPrincipales.some(h => h.toLowerCase().includes(termino))
    );
  });

  return (
    <aside className="sidebar">
      <h2>Equipo</h2>

      {/* Barra de búsqueda */}
      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Buscar por nombre o skill..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="team-list-scroll">
        {equipoFiltrado.map((integrante) => (
          <div
            key={integrante.id}
            className={`team-card ${seleccionado?.id === integrante.id ? "team-card-activo" : ""}`}
            onClick={() => onSelect(integrante)}
          >
            <img src={integrante.foto} alt={integrante.nombre} />
            <div>
              <h4>{integrante.nombre}</h4>
              <p>{integrante.rol}</p>
            </div>
          </div>
        ))}
        
        {equipoFiltrado.length === 0 && (
          <p className="no-results">No se encontraron resultados</p>
        )}
      </div>
    </aside>
  );
}