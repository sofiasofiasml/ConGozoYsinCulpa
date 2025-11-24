import { useState } from 'react';
import { Heart, Sparkles, Flower2, ArrowRight } from 'lucide-react';
import './RitualCorporal.css';

const benefits = [
    {
        icon: <Heart size={32} />,
        title: 'Reconexión Profunda',
        description: 'Vuelve a habitar tu cuerpo con amor y presencia consciente.'
    },
    {
        icon: <Sparkles size={32} />,
        title: 'Liberación Emocional',
        description: 'Suelta tensiones físicas y emocionales acumuladas en tu cuerpo.'
    },
    {
        icon: <Flower2 size={32} />,
        title: 'Despertar de Tu Esencia',
        description: 'Conecta con tu sabiduría interior y tu poder femenino.'
    }
];

const testimonials = [
    {
        name: 'Macarena González',
        text: 'Mi experiencia con Mónica es imposible de explicar. Entras pensando en un masaje pero lo que te encuentras es muchísimo más que eso... Crees que estás sanando el cuerpo y más que eso, sanas tu alma. Mónica es mucho más que una masajista, ella es mágica.'
    },
    {
        name: 'Carmen Hernández',
        text: 'Cuando Monica me hacía el masaje yo experimentaba liberación. Partes de mi que nunca habían sido masajeadas asi, se desanudaban. Durante unos dias, despues del masaje, experimente un estado de consciencia muy expandido.'
    }
];

const RitualCorporal = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="ritual-page">
            {/* Hero Section */}
            <section className="ritual-hero">
                <div className="ritual-hero-content">
                    <h1 className="ritual-h1">Ritual Corporal Femenino + Guía de Tu Alma</h1>
                    <p className="ritual-hero-subtitle">
                        Un espacio sagrado para reconectar con tu cuerpo, liberar lo que ya no te sirve
                        y despertar la sabiduría que habita en ti.
                    </p>
                </div>
                <div className="ritual-hero-image">
                    <img
                        src="/img/monicahrosety.jpg"
                        alt="Mónica Hernández Rosety - Ritual Corporal Femenino"
                    />
                </div>
            </section>

            {/* What is it Section */}
            <section className="ritual-section ritual-what">
                <div className="ritual-container">
                    <h2 className="ritual-h2">¿Qué es el Ritual Corporal Femenino?</h2>
                    <div className="ritual-content-grid">
                        <div className="ritual-text-content">
                            <p>
                                El Ritual Corporal Femenino es mucho más que un masaje. Es un encuentro íntimo
                                contigo misma, un viaje de regreso a tu cuerpo y a tu esencia.
                            </p>
                            <p>
                                A través del tacto consciente, la escucha profunda y técnicas de masaje terapéutico
                                y energético, te acompaño a soltar tensiones físicas y emocionales, a reconectar
                                con tu feminidad y a despertar la sabiduría que tu cuerpo guarda.
                            </p>
                            <p>
                                Este ritual está diseñado para mujeres que desean:
                            </p>
                            <ul className="ritual-list">
                                <li>Sanar su relación con el cuerpo y la sexualidad</li>
                                <li>Liberar traumas, bloqueos y memorias corporales</li>
                                <li>Reconectar con su placer y su poder femenino</li>
                                <li>Vivirse con más amor, presencia y autenticidad</li>
                            </ul>
                        </div>
                        <div className="ritual-image-placeholder">
                            <img src="/img/yoga.jpg" alt="Ritual Corporal - Conexión" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="ritual-section ritual-benefits">
                <div className="ritual-container">
                    <h2 className="ritual-h2">Beneficios del Ritual</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3 className="ritual-h3">{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="ritual-section ritual-process">
                <div className="ritual-container">
                    <h2 className="ritual-h2">¿Cómo es una Sesión?</h2>
                    <div className="process-content">
                        <div className="process-step">
                            <span className="step-number">1</span>
                            <div className="step-content">
                                <h3 className="ritual-h3">Encuentro y Escucha</h3>
                                <p>
                                    Comenzamos con un espacio de conversación donde te escucho y comprendo
                                    qué necesitas en este momento de tu vida.
                                </p>
                            </div>
                        </div>
                        <div className="process-step">
                            <span className="step-number">2</span>
                            <div className="step-content">
                                <h3 className="ritual-h3">Ritual Corporal</h3>
                                <p>
                                    A través del masaje terapéutico, el tacto consciente y técnicas energéticas,
                                    te acompaño a soltar, liberar y reconectar con tu cuerpo.
                                </p>
                            </div>
                        </div>
                        <div className="process-step">
                            <span className="step-number">3</span>
                            <div className="step-content">
                                <h3 className="ritual-h3">Guía de Tu Alma</h3>
                                <p>
                                    Cerramos con un espacio de integración donde comparto contigo lo que
                                    tu cuerpo me ha mostrado y te ofrezco guía para tu camino.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is it for Section */}
            <section className="ritual-section ritual-for-who">
                <div className="ritual-container">
                    <h2 className="ritual-h2">¿Para Quién es Este Ritual?</h2>
                    <div className="for-who-content">
                        <p className="for-who-intro">
                            Este ritual es para ti si:
                        </p>
                        <div className="for-who-grid">
                            <div className="for-who-card">
                                <p>Sientes desconexión con tu cuerpo o tu sexualidad</p>
                            </div>
                            <div className="for-who-card">
                                <p>Cargas tensiones físicas o emocionales que no logras soltar</p>
                            </div>
                            <div className="for-who-card">
                                <p>Deseas sanar tu relación con el placer y la feminidad</p>
                            </div>
                            <div className="for-who-card">
                                <p>Buscas un espacio seguro para explorar y sanar</p>
                            </div>
                            <div className="for-who-card">
                                <p>Quieres vivir desde un lugar más amoroso y consciente</p>
                            </div>
                            <div className="for-who-card">
                                <p>Anhelas reconectar con tu esencia y tu poder interior</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="ritual-section ritual-testimonials">
                <div className="ritual-container">
                    <h2 className="ritual-h2">Experiencias de Mujeres que ya lo Vivieron</h2>
                    <div className="testimonials-carousel">
                        <button
                            className="carousel-btn prev-btn"
                            onClick={prevTestimonial}
                            aria-label="Anterior testimonio"
                        >
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

                        <button
                            className="carousel-btn next-btn"
                            onClick={nextTestimonial}
                            aria-label="Siguiente testimonio"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="ritual-section ritual-cta">
                <div className="ritual-cta-content">
                    <h2 className="ritual-h2">¿Lista para Reconectar con Tu Esencia?</h2>
                    <p className="ritual-cta-text">
                        Regálate este espacio de amor, sanación y reconexión.
                        Tu cuerpo y tu alma te lo agradecerán.
                    </p>
                    <a
                        href="https://wa.me/34123456789?text=Hola%20Mónica,%20me%20interesa%20el%20Ritual%20Corporal%20Femenino"
                        className="ritual-cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Reserva tu Ritual <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default RitualCorporal;
