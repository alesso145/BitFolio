import { Users } from "lucide-react";

export default function PerfilVacio() {
  return (
    <div className="perfil-vacio">
      <div className="perfil-mensaje">
        <div className="icono">
          {/* Icono de BitFolio */}
          <Users size={48} strokeWidth={1.5} />
        </div>
        <p>Selecciona un integrante del equipo para ver su perfil</p>
      </div>
    </div>
  );
}