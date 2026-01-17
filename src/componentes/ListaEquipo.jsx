import { equipo } from "../data/equipo.js";

export default function Lista({ onSelect }) {
  return (
    <aside className="lista-equipo">
      <h2>Equipo</h2>
      <ul>
        {equipo.map((integrante) => (
          <li
            key={integrante.id}
            className="item-equipo"
            onClick={() => onSelect(integrante)}
          >
            <img 
              src={integrante.foto} 
              alt={integrante.nombre} 
              className="team-avatar" 
            />
            <div>
              <h3>{integrante.nombre}</h3>
              <p>{integrante.rol}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}