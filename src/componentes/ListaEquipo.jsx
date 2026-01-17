export default function Lista({ onSelect }) {
  return (
    <aside className="lista-equipo">
      <h2>Equipo</h2>

      <ul>
        <li
          className="item-equipo"
          onClick={() =>
            onSelect({
              nombre: "Andrea",
              rol: "Animación y Multimedia",
              foto: "/imagenes/Andrea.png",
            })
          }
        >
          <img src="/imagenes/Andrea.png" alt="Andrea" className="team-avatar" />
          <div>
            <h3>Andrea</h3>
            <p>Animación y Multimedia</p>
          </div>
        </li>

        <li
          className="item-equipo"
          onClick={() =>
            onSelect({
              nombre: "Frixon Lovato",
              rol: "Desarrollador Frontend",
              foto: "/imagenes/Frixon.png",
            })
          }
        >
          <img
            src="/imagenes/Frixon.png"
            alt="Frixon Lovato"
            className="team-avatar"
          />
          <div>
            <h3>Frixon Lovato</h3>
            <p>Desarrollador Frontend</p>
          </div>
        </li>

        <li
          className="item-equipo"
          onClick={() =>
            onSelect({
              nombre: "Alessandro Morales",
              rol: "Desarrollador Backend",
              foto: "/imagenes/Alesso.png",
            })
          }
        >
          <img
            src="/imagenes/Alesso.png"
            alt="Alessandro Morales"
            className="team-avatar"
          />
          <div>
            <h3>Alessandro Morales</h3>
            <p>Desarrollador Backend</p>
          </div>
        </li>

        <li
          className="item-equipo"
          onClick={() =>
            onSelect({
              nombre: "Stalin Paguay",
              rol: "Administrador de Bases de Datos",
              foto: "/imagenes/Stalin.png",
            })
          }
        >
          <img
            src="/imagenes/Stalin.png"
            alt="Stalin Paguay"
            className="team-avatar"
          />
          <div>
            <h3>Stalin Paguay</h3>
            <p>Administrador de Bases de Datos</p>
          </div>
        </li>

        <li
          className="item-equipo"
          onClick={() =>
            onSelect({
              nombre: "Santiago Tenensaray",
              rol: "Desarrollador Backend",
              foto: "/imagenes/Santiago.png",
            })
          }
        >
          <img
            src="/imagenes/Santiago.png"
            alt="Santiago Tenensaray"
            className="team-avatar"
          />
          <div>
            <h3>Santiago Tenensaray</h3>
            <p>Desarrollador Backend</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}
