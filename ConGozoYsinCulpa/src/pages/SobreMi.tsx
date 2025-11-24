import { useState } from 'react';
import './SobreMi.css';

const therapies = [
  "TERAPEUTA CAPACITADO TERAPIA LNT®",
  "MASAJE DESBLOQUEO SEXUALIDAD",
  "TANTRA",
  "MASAJE TNDR®",
  "QUIROMASAJE",
  "PIEDRAS CALIENTES (HOT STONES)",
  "MASAJE LOMI LOMI",
  "MASAJE THAILANDÉS",
  "MASAJE CON CAÑAS DE BAMBÚ",
  "MASAJE TERAPÉUTICO Y RELAJANTE",
  "MASAJE AYURVÉDICO CHAMPI",
  "DRENAJE LINFÁTICO",
  "REFLEXOLOGÍA PODAL",
  "KINESIOLOGÍA HOLÍSTICA",
  "REIKI NIVEL I",
  "TERAPIA ESTRUCTURAL",
  "TERAPIA FLORAL: BACH, ORQUÍDEAS COLOMBIANAS Y EUROPEAS",
  "TERP · TERAPIA EXPRESIVA DE LA RISA PROFUNDA"
];

const personalFacts = [
  "Siempre me han apasionado los caballos, aunque me daban mucho miedo. La vida me trajo la oportunidad de poder conocerlos y tuve que encargarme de su cuidado durante un tiempo y así pude conectar con ellos. En especial con mi amigo Manolo, el potrillo que me escogió.",
  "Estuve atrapada en el Círculo Polar Ártico durante un mes y medio y pensé que no lo contaría. Gracias a ello viví una de las experiencias más especiales de mi vida: estar rodeada de toda una manada de más de 30 renos.",
  "¡Me encanta leer! Eso sí, la lectura me ha de aportar algo. Ha de tener Alma. Me sucede lo mismo con las películas, me gustan aquellas que sean de crecimiento o que me hagan pensar.",
  "Tengo una mente inquieta, curiosa y expansiva, por lo que siempre busco aprender cosas nuevas. Como dijo Steve Jobs «Sigue hambriento · Sigue alocado». Me gusta abrir la mente para tener más experiencias de la vida.",
  "Brandy, que es mi perrita, llegó a mi vida de manera «causal». La rescaté a ella y a sus hermanos, sin pensarlo, de una muerte segura, y les busqué casa… pero cuando ya solo quedaba Brandy y querían adoptarla, me descubrí diciendo que era mi perrita.",
  "Soy una persona vivaz y aventurera y me atrae el esquí, el surf, pasear en canoa,… y por supuesto, viajar. Siento que viajando expando mi Alma. Por lo pronto, tengo ganas de viajar a Thailandia y Australia.",
  "Las mejores experiencias de mi vida siempre se han dado cuando ayudaba a otros. ¡Gracias!",
  "He sido bailarina de las que escupen fuego y hacía espectáculos. Ahora estoy retirada, pero sigo amando la danza, pues me hace conectar con mi esencia, me hace sentir viva, sentir libre y vibrar."
];

const testimonials = [
  {
    name: "Alberto Mataró",
    text: "Hola, actualmente tengo 43 años y Mónica ha sido capaz de recuperar toda mi energía que parecía que ya se estaba agotando. Después de estar unos 20 años trabajando en la empresa familiar de construcción, sentía que tenía un cuerpo desgastado y maltratado... Os aseguro que mi vida ha cambiado un 200%, mi cuerpo, y yo con él, tengo un montón de ganas de realizar actividades... El trato es muy dulce y muy profesional."
  },
  {
    name: "Toni",
    text: "Mónica es una persona con una sensibilidad especial, que en cada masaje sabe leer tus dolencias, debilidades y emociones, dándole forma con sus manos a una sanación que va más allá de lo físico. Al final entras en una relajación que parece que te transporta a otro plano de la realidad."
  },
  {
    name: "Joan F.",
    text: "Acudí a ella por una antigua lesión de hombro en una caída de moto... En pocas sesiones recuperé gran parte de la agilidad y movimiento perdido. Derroche de técnica en sus manos y dulzura en su voz, te transmite paz, que hace que te sepa a poco. ¡¡Gracias Mónica!!"
  },
  {
    name: "Iván G.",
    text: "Desde hace tiempo y a causa del trabajo, sobre todo, tengo contracturas diversas... Con los masajes de Mónica he experimentado una mejoría importante, notando que los nudos y bloqueos desaparecian. La atmósfera de tranquilidad y confianza... invitan a iniciar un proceso de recuperación."
  },
  {
    name: "Macarena González",
    text: "Mi experiencia con Mónica es imposible de explicar. Entras pensando en un masaje pero lo que te encuentras es muchísimo más que eso... Crees que estás sanando el cuerpo y más que eso, sanas tu alma. Mónica es mucho más que una masajista, ella es mágica."
  },
  {
    name: "Miguel Sant Sebastian",
    text: "Me dolían tanto las muñecas que ya no podía hacer bien un trabajo muy importante para mi. Mónica... con muchísimo cariño y un trato muy personal... Unos 2 dias despues dejaron de doler mis brazos. Ahora he podido acabar el trabajo."
  },
  {
    name: "Carmen Hernández",
    text: "Cuando Monica me hacía el masaje yo experimentaba liberación. Partes de mi que nunca habían sido masajeadas asi, se desanudaban. Durante unos dias, despues del masaje, experimente un estado de consciencia muy expandido."
  }
];

const SobreMi = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % personalFacts.length);
  };

  const prevFact = () => {
    setCurrentFact((prev) => (prev - 1 + personalFacts.length) % personalFacts.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="page-container sobre-mi-page">
      <section className="intro-section">
        <div className="intro-content">
          <h1>Sobre mí</h1>
          <h2 className="intro-name">Me llamo Mónica Hernández Rosety</h2>
          <p className="intro-mission">
            Te ayudo a mejorar tu calidad de vida, a reducir el dolor y malestar físico y emocional, a deshacer bloqueos sexuales y a mimarte y recuperar tu bienestar a través del masaje y otras terapias naturales.
          </p>
        </div>
        <div className="intro-image">
          <img src="/img/monicahrosety.jpg" alt="Mónica Hernández Rosety" />
        </div>
      </section>

      <section className="bio-section">
        <h3>¿Te atreves a conocerme?</h3>
        <h4>Sanitaria de Profesión. Cuidadora de Vocación</h4>

        <div className="bio-content">
          <p>
            Socorrista y Voluntaria de la Cruz Roja Española, Técnico Auxiliar de Clínica, dejé de cursar la formación de Técnico de Laboratorio y Análisis Clínicos al darme cuenta que no me entusiasmaba.
          </p>
          <p>
            Ejercí unos años en Hospital y a pesar de vibrar en el cuidado y acompañamiento de los demás sentía que no era desde ese lugar donde podía desplegar mi potencial y desde donde podía ayudarte.
          </p>
          <p>
            Me dediqué unos años a bailar y escuchar mi música interior (literalmente) y a dejarme guiar por mi sentir allá donde la música me llevaba, viajando y explotando la Diosa Femenina que hay en mi y habita en cada mujer.
          </p>
          <p>
            No fue hasta el año 2010 que se me despertó la curiosidad por las terapias naturales empezando por el tantra, por aquel entonces quería conectar con mi pareja a todos los niveles, pues sentía que sólo nos entendíamos en el plano sexual y anhelaba conectar también a nivel espiritual, emocional, establecer un vinculo de Amor profundo y con Consciencia mas allá del plano físico y la belleza exterior.
          </p>
          <p>
            Quería aprender a mirar con “Los Ojos Del Alma”, Iluminando desde el Ser de luz que Soy, aceptando las Sombras del otro y las mías propias.
          </p>
          <p>
            En el año 2011 ya soltera, desilusionada, y habiendo vivido una sexualidad mal entendida, la vida me llevó a David Alcalde, en la escuela Sushuma, donde me formé como Masoterapeta Tantrica en Tantra Blanco, Tantra Rojo, Tantra Kriya Yoga, Toque Consciente y Cura Sexual y Punto Sagrado a través del masaje Tantra que cambio toda mi percepción sobre la Sexualidad, el Amor, el Compartir y el Honrar y Liberar al Hombre así como a la Mujer, y a mirarnos de igual a igual entendiendo la Naturaleza de cada uno.
          </p>
          <p>
            Desde entonces y hasta el día de hoy llevo ejerciendo como Masajista y Masoterapeuta Tántrica y me he formado en las disciplinas que puedes ver un poco más abajo y con las que creo que puedo ayudarte mucho mejor.
          </p>
          <p>
            Como alma inquieta que soy, sigo en continua Formación. En este momento continúo mi Formación en Desbloqueo Sexualidad con la Técnica TNDR en el Instituto TNDR Barcelona con su directora Pilar García.
          </p>
          <p>
            Continué mi formación en el Curso de Herramientas de Psicoterapia para Terapeutas Florales, con Carmen Hernández, y he finalizado los dos años de la Formación de TERP (Terapia Expresiva de la Risa Profunda), con Enrique Aguilar.
          </p>
          <p>
            También estoy realizando la Formación completa en Terapia Gestalt en el Instituto Gestalt de Joan Garriga, Barcelona.
          </p>
        </div>
      </section>

      <section className="therapies-section">
        <h3>TERAPIAS EN LAS QUE ESTOY FORMADA</h3>
        <p className="therapies-intro">
          Durante estos años desde el 2010, me he formado en las siguientes técnicas y herramientas de masaje, que pongo a tu servicio dentro de mi sesión terapuéutica para tu mayor beneficio.
        </p>
        <ul className="therapies-list">
          {therapies.map((therapy, index) => (
            <li key={index}>{therapy}</li>
          ))}
        </ul>
      </section>

      <section className="personal-facts-section">
        <h3>Te cuento 8 cosas sobre mí muy personales</h3>
        <div className="facts-carousel">
          <button className="carousel-btn prev-btn" onClick={prevFact} aria-label="Anterior dato">
            &#10094;
          </button>

          <div className="fact-card active">
            <span className="fact-number">{currentFact + 1}</span>
            <p>{personalFacts[currentFact]}</p>
            <div className="carousel-dots">
              {personalFacts.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentFact ? 'active' : ''}`}
                  onClick={() => setCurrentFact(idx)}
                />
              ))}
            </div>
          </div>

          <button className="carousel-btn next-btn" onClick={nextFact} aria-label="Siguiente dato">
            &#10095;
          </button>
        </div>

        <div className="quote-box">
          <p>El secreto del cambio está en enfocarte en lo que deseas y no en luchar contra lo que quieres dejar atrás</p>
        </div>
      </section>

      <section className="final-cta-section">
        <h3>¡Quiero hacer terapia contigo!</h3>
        <button className="primary-button">Reserva tu hora</button>
      </section>

      <section className="testimonials-section">
        <h2>QUÉ DICEN MIS CLIENTES</h2>
        <div className="testimonials-carousel">
          <button className="carousel-btn prev-btn" onClick={prevTestimonial} aria-label="Anterior testimonio">
            &#10094;
          </button>

          <div className="testimonial-card active">
            <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
            <h4 className="testimonial-author">- {testimonials[currentTestimonial].name}</h4>
            <div className="carousel-dots">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(idx)}
                />
              ))}
            </div>
          </div>

          <button className="carousel-btn next-btn" onClick={nextTestimonial} aria-label="Siguiente testimonio">
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
};

export default SobreMi;
