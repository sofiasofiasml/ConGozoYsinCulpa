import './Servicios.css';

const Servicios = () => (
  <div className="page-container servicios-page">
    <section className="services-intro">
      <h1>Mis Servicios</h1>
      <p>Descubre cómo puedo ayudarte a recuperar tu bienestar.</p>
    </section>

    <div className="services-list">
      <div className="service-item">
        <h3>TRATAMIENTO MASAJE DESBLOQUEO Y BIORRESONANCIA</h3>
        <p className="service-question">¿Qué parte de tu cuerpo te dificulta disfrutar de tu día a día?</p>
        <p>Sana de una manera holística cuerpo, mente y alma.</p>
        <button className="service-cta">Quiero saber más</button>
      </div>

      <div className="service-item">
        <h3>TRATAMIENTO DESBLOQUEO SEXUALIDAD</h3>
        <p>Mejora o recupera tu vida sexual y deja atrás cualquier tipo de bloqueo físico-psíquico.</p>
        <p>Disfruta de tu sexualidad.</p>
        <button className="service-cta">Me interesa</button>
      </div>

      <div className="service-item">
        <h3>QUIROMASAJE · HOT STONES · LOMI</h3>
        <p>¿Quieres aliviar tu estrés y tensiones diarias?</p>
        <p>Disfruta de los beneficios de la técnica más conocida y restablece tu equilibrio y bienestar.</p>
        <button className="service-cta">Sí, ¡Quiero mimarme!</button>
      </div>
    </div>

    <section className="why-natural-therapies">
      <h2>¿Por Qué y Para Qué escoger las Terapias Naturales para sanar tus dolores?</h2>

      <div className="reasons-grid">
        <div className="reason-card">
          <h3>Son respetuosas</h3>
          <p>
            Porque no son invasivas ni agresivas. Las Terapias Naturales respetan la naturaleza de cada ser humano, donde no eres tú el que se adapta a la terapia, sino que la terapia se adapta a ti.
          </p>
        </div>

        <div className="reason-card">
          <h3>Permiten tu recuperación</h3>
          <p>
            Para que te recuperes y vuelvas a vibrar… Las Terapias Naturales te ayudan a que tu cuerpo físico y psíquico, regrese al estado con el que vino al mundo.
          </p>
        </div>
      </div>

      <p className="closing-statement">
        Deja de lamentarte y pasa a la acción. Recupera tu libertad de movimiento, siéntete libre en tu vida y con tu cuerpo.
      </p>
    </section>
  </div>
);

export default Servicios;
