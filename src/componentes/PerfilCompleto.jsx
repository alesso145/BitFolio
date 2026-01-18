export default function PerfilCompleto({ persona }) {
  return (
    <div className="perfil-vacio">
      <div className="perfil-contenedor">

        {/* PRIMER RECUADRO: FOTO + INFO */}
        <div className="perfil-card perfil-principal">
          <div className="perfil-principal-foto">
            <img src={persona.foto} alt={persona.nombre} className="perfil-avatar" />
          </div>
          <div className="perfil-principal-info">
            <h2>{persona.nombre}</h2>
            <h4>{persona.rol}</h4>
            <p>{persona.descripcion}</p>
          </div>
        </div>

        {/* CONTACTO */}
        <div className="perfil-card">
          <h4>Contacto</h4>
          <p><b>Email:</b> {persona.email}</p>
          <p><b>Teléfono:</b> {persona.telefono}</p>
          {persona.github && <p><b>GitHub:</b> {persona.github}</p>}
          {persona.linkedin && <p><b>LinkedIn:</b> {persona.linkedin}</p>}
        </div>

        {/* HABILIDADES */}
        <div className="perfil-card">
          <h4>Habilidades principales</h4>
          <div className="skills">
            {persona.habilidadesPrincipales.map((h, i) => (
              <span key={i} className="skill">{h}</span>
            ))}
          </div>
          {persona.habilidadesSecundarias.length > 0 && (
            <>
              <h4>Habilidades secundarias</h4>
              <div className="skills">
                {persona.habilidadesSecundarias.map((h, i) => (
                  <span key={i} className="skill">{h}</span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* EXPERIENCIA */}
        <div className="perfil-card">
          <h4>Experiencia</h4>
          {persona.experiencia.map((exp, i) => (
            <div key={i} className="experiencia-item">
              <h5>{exp.puesto} - {exp.empresa}</h5>
              <p className="experiencia-fecha">{exp.fecha}</p>
              <p>{exp.descripcion}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}