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
          <div className="contacto">
            <span>📧 {persona.email}</span>
            <span>📞 {persona.telefono}</span>
            {persona.github && <span>🐙 GitHub</span>}
            {persona.linkedin && <span>🔗 LinkedIn</span>}
          </div>
        </div>

        {/* HABILIDADES */}
        <div className="perfil-card">
          <h4>Habilidades</h4>

          <p className="skills-title">Principales</p>
          <div className="skills">
            {persona.habilidadesPrincipales.map((h, i) => (
              <span key={i} className="skill skill-primary">{h}</span>
            ))}
          </div>

          {persona.habilidadesSecundarias.length > 0 && (
            <>
              <p className="skills-title">Secundarias</p>
              <div className="skills">
                {persona.habilidadesSecundarias.map((h, i) => (
                  <span key={i} className="skill skill-secondary">{h}</span>
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
              <h5>{exp.titulo}</h5>
              <p className="experiencia-fecha">{exp.periodo}</p>
              <p>{exp.descripcion}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}