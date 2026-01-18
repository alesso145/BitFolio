import { equipo } from "../data/equipo";

export default function ListaEquipo({ onSelect }) {
  return (
    <aside className="sidebar">
      <h2>Equipo</h2>

      {equipo.map((integrante) => (
        <div
          key={integrante.id}
          className="team-card"
          onClick={() => onSelect(integrante)}
        >
          <img src={integrante.foto} alt={integrante.nombre} />
          <div>
            <h4>{integrante.nombre}</h4>
            <p>{integrante.rol}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}