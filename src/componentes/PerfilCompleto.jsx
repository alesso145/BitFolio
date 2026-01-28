import { Mail, Phone, Github, Linkedin, Briefcase } from "lucide-react";

export default function PerfilCompleto({ persona }) {
  return (
    /*  animación al cambiar de perfil */
    <div key={persona.id} className="perfil-completo-vista animacion-perfil">
      <div className="perfil-contenedor">

        {/* RECUADRO PRINCIPAL */}
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

        {/* SECCIÓN DE CONTACTO CON ICONOS LUCIDE */}
        <div className="perfil-card">
          <h4>Contacto</h4>
          <div className="contacto">
            <a href={`mailto:${persona.email}`} className="contacto-link">
              <Mail size={16} /> {persona.email}
            </a>

            <a href={`tel:${persona.telefono}`} className="contacto-link">
              <Phone size={16} /> {persona.telefono}
            </a>

            {persona.github && (
              <a href={persona.github} target="_blank" rel="noopener noreferrer" className="contacto-link">
                <Github size={16} /> GitHub
              </a>
            )}

            {persona.linkedin && (
              <a href={persona.linkedin} target="_blank" rel="noopener noreferrer" className="contacto-link">
                <Linkedin size={16} /> LinkedIn
              </a>
            )}
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

        {/* EXPERIENCIA CON ICONO  */}
        <div className="perfil-card">
          <h4>Experiencia</h4>
          {persona.experiencia.map((exp, i) => (
            <div key={i} className="experiencia-item">
              <div className="exp-header">
                <Briefcase size={16} className="icon-gold" />
                <h5>{exp.titulo}</h5>
              </div>
              <p className="experiencia-fecha">{exp.periodo}</p>
              <p>{exp.descripcion}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}