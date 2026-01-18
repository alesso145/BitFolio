import ListaEquipo from "../componentes/ListaEquipo";
import PerfilVacio from "../componentes/PerfilVacio";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo">BitFolio</span>
        </div>

        <div className="navbar-right">
          <span>Bienvenido, <b>Santiago</b></span>
          <button className="logout">Cerrar sesión</button>
        </div>
      </header>

      {/* CUERPO */}
      <div className="dashboard-body">
        <ListaEquipo />
        <PerfilVacio />
      </div>

    </div>
  );
}