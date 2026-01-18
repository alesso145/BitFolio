export default function DetallePerfil({ integrante }) {
  if (!integrante) return null;

  return (
    <section className="profile-detail">
      <div className="cabecera-perfil">
        <img src={integrante.foto} alt={integrante.nombre} />

        <div className="informacion-cabecera">
          <h2>{integrante.nombre}</h2>
          <p>{integrante.rol}</p>
          <span>{integrante.descripcion}</span>
        </div>
      </div>

      <div className="seccion-perfil">
        <h3>Contacto</h3>
        <ul>
          <li>Email: {integrante.email}</li>
          <li>Teléfono: {integrante.telefono}</li>
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
      </div>

      <div className="seccion-perfil">
        <h3>Habilidades</h3>

        <h4>Principales</h4>
        <ul>
          {integrante.habilidadesPrincipales.map((hab, i) => (
            <li key={i}>{hab}</li>
          ))}
        </ul>

        <h4>Secundarias</h4>
        <ul>
          {integrante.habilidadesSecundarias.map((hab, i) => (
            <li key={i}>{hab}</li>
          ))}
        </ul>
      </div>

      <div className="seccion-perfil">
        <h3>Experiencia</h3>

        {integrante.experiencia.map((exp, i) => (
          <div key={i} className="item-experiencia">
            <h4>{exp.titulo}</h4>
            <span>{exp.periodo}</span>
            <p>{exp.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}