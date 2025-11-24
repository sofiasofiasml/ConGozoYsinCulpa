import { Heart, Users, Moon, Sparkles, Flower2, ArrowRight } from 'lucide-react';
import './CirculoMujeres.css';

const beneficios = [
  {
    icon: <Heart size={32} />,
    title: 'Espacio Seguro',
    description: 'Un lugar de escucha sin juicios donde puedes ser tú misma.'
  },
  {
    icon: <Users size={32} />,
    title: 'Sororidad',
    description: 'Conexión profunda con otras mujeres en un ambiente de apoyo mutuo.'
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Autorreflexión',
    description: 'Espacio para conocerte, aceptarte y crecer desde tu esencia.'
  },
  {
    icon: <Flower2 size={32} />,
    title: 'Sanación Colectiva',
    description: 'Sostén grupal para sanar heridas y liberar cargas emocionales.'
  }
];

const tematicas = [
  'Feminidad consciente y sagrada',
  'Ciclos menstruales y conexión con la luna',
  'Sexualidad y placer femenino',
  'Maternidad y crianza consciente',
  'Relaciones de pareja saludables',
  'Sanación de heridas del linaje femenino',
  'Autoestima y amor propio',
  'Creatividad y expresión femenina'
];

const CirculoMujeres = () => {
  return (
    <div className="circulo-page">
      {/* Hero Section */}
      <section className="circulo-hero">
        <div className="circulo-hero-content">
          <div className="circulo-badge">
            <Moon size={16} />
            <span>Encuentros Mensuales</span>
          </div>
          <h1 className="circulo-h1">Círculo de Mujeres</h1>
          <p className="circulo-hero-subtitle">
            Un espacio sagrado de encuentro, escucha y sanación colectiva.
            Donde las mujeres nos reunimos para sostener, acompañar y crecer juntas.
          </p>
        </div>
        <div className="circulo-hero-image">
          <img
            src="/img/yoga.jpg"
            alt="Círculo de Mujeres - Espacio de encuentro femenino"
          />
        </div>
      </section>

      {/* What is Section */}
      <section className="circulo-section circulo-what">
        <div className="circulo-container">
          <h2 className="circulo-h2">¿Qué es un Círculo de Mujeres?</h2>
          <div className="circulo-content-grid">
            <div className="circulo-text-content">
              <p>
                Un <strong>Círculo de Mujeres</strong> es una reunión sagrada que busca brindar
                un espacio grupal seguro y horizontal (no jerárquico) dirigido específicamente a mujeres.
              </p>
              <p>
                En los círculos, las mujeres pueden ser escuchadas, sostenidas y vistas sin juicios,
                de modo que cada una cuenta con un espacio de autorreflexión, aceptación propia y de otras,
                apoyo grupal y descanso.
              </p>
              <p>
                Este acto ritual suele incluir actividades como la meditación, el trabajo corporal,
                el canto, la presencia de altares, y las referencias a lo divino o sagrado femenino.
                La corporeidad y la feminidad sirven como puntos de partida desde los cuales se cuestiona,
                experimenta y explora en un sentido más creativo.
              </p>
              <p className="circulo-highlight">
                <Moon size={20} />
                Los círculos ocurren periódicamente, por lo general cada luna llena.
              </p>
            </div>
            <div className="circulo-image-box">
              <img src="/img/taller.jpg" alt="Círculo de Mujeres en sesión" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="circulo-section circulo-benefits">
        <div className="circulo-container">
          <h2 className="circulo-h2">Beneficios del Círculo</h2>
          <div className="benefits-grid">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{beneficio.icon}</div>
                <h3 className="circulo-h3">{beneficio.title}</h3>
                <p>{beneficio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="circulo-section circulo-structure">
        <div className="circulo-container">
          <h2 className="circulo-h2">Estructura de Nuestros Encuentros</h2>
          <p className="circulo-intro">
            Cada círculo sigue una estructura ceremonial que honra el espacio sagrado y
            mantiene la seguridad y confianza entre las participantes:
          </p>

          <div className="structure-list">
            <div className="structure-item">
              <span className="structure-number">1</span>
              <div className="structure-content">
                <h3 className="circulo-h3">Apertura del Círculo</h3>
                <p>
                  Creamos un espacio íntimo y sagrado, libre de intromisiones.
                  Armamos un altar central con velas, flores y elementos que honran lo femenino.
                </p>
              </div>
            </div>

            <div className="structure-item">
              <span className="structure-number">2</span>
              <div className="structure-content">
                <h3 className="circulo-h3">Intención y Conexión</h3>
                <p>
                  Definimos la intención del encuentro y nos conectamos con nosotras mismas
                  y con el grupo a través de meditación, respiración o movimiento.
                </p>
              </div>
            </div>

            <div className="structure-item">
              <span className="structure-number">3</span>
              <div className="structure-content">
                <h3 className="circulo-h3">Compartir en Círculo</h3>
                <p>
                  Cada mujer tiene espacio para compartir desde su corazón.
                  Escuchamos sin juzgar, sostenemos sin arreglar, acompañamos sin invadir.
                </p>
              </div>
            </div>

            <div className="structure-item">
              <span className="structure-number">4</span>
              <div className="structure-content">
                <h3 className="circulo-h3">Ritual y Sanación</h3>
                <p>
                  Trabajamos con rituales, cantos, movimiento corporal o prácticas energéticas
                  según la temática del encuentro.
                </p>
              </div>
            </div>

            <div className="structure-item">
              <span className="structure-number">5</span>
              <div className="structure-content">
                <h3 className="circulo-h3">Cierre y Gratitud</h3>
                <p>
                  Cerramos el círculo honrando lo compartido, agradeciendo la presencia de cada una
                  y sellando el espacio sagrado que co-creamos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="circulo-section circulo-themes">
        <div className="circulo-container">
          <h2 className="circulo-h2">Temáticas que Exploramos</h2>
          <p className="circulo-intro">
            Cada encuentro tiene una temática diferente que nos invita a profundizar
            en distintos aspectos de nuestra experiencia como mujeres:
          </p>
          <div className="themes-grid">
            {tematicas.map((tema, index) => (
              <div key={index} className="theme-card">
                <Flower2 size={20} className="theme-icon" />
                <p>{tema}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="circulo-section circulo-for-who">
        <div className="circulo-container">
          <h2 className="circulo-h2">¿Para Quién es Este Círculo?</h2>
          <div className="for-who-content">
            <p className="for-who-intro">
              Este círculo es para ti si:
            </p>
            <div className="for-who-grid">
              <div className="for-who-card">
                <p>Buscas un espacio de conexión auténtica con otras mujeres</p>
              </div>
              <div className="for-who-card">
                <p>Sientes la necesidad de ser escuchada sin juicios</p>
              </div>
              <div className="for-who-card">
                <p>Quieres explorar tu feminidad de manera consciente</p>
              </div>
              <div className="for-who-card">
                <p>Deseas sanar heridas del linaje femenino</p>
              </div>
              <div className="for-who-card">
                <p>Anhelas un espacio de sororidad y apoyo mutuo</p>
              </div>
              <div className="for-who-card">
                <p>Buscas reconectar con tu esencia y tu poder femenino</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="circulo-section circulo-cta">
        <div className="circulo-cta-content">
          <Moon size={48} className="cta-icon" />
          <h2 className="circulo-h2">¿Lista para Unirte al Círculo?</h2>
          <p className="circulo-cta-text">
            El próximo encuentro es en luna llena.
            Reserva tu lugar y forma parte de esta hermandad de mujeres.
          </p>
          <a
            href="https://wa.me/34123456789?text=Hola%20Mónica,%20me%20interesa%20el%20Círculo%20de%20Mujeres"
            className="circulo-cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserva tu Lugar <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CirculoMujeres;
