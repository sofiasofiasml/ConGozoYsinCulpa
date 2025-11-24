import { Moon, Star, Flower2, Heart, Sparkles, ArrowRight, Check } from 'lucide-react';
import './MembresiaMensual.css';

const beneficios = [
    {
        icon: <Star size={32} />,
        title: 'Lectura de Carta Natal',
        description: 'Cada mes, una lectura personalizada de tu carta natal enfocada en el momento que estás viviendo.'
    },
    {
        icon: <Flower2 size={32} />,
        title: 'Flores de Bach Personalizadas',
        description: 'Recomendación de esencias florales específicas para acompañar tu proceso emocional del mes.'
    },
    {
        icon: <Heart size={32} />,
        title: 'Acompañamiento vía WhatsApp',
        description: 'Acceso directo para consultas, dudas y apoyo durante todo el mes.'
    },
    {
        icon: <Moon size={32} />,
        title: 'Rituales Lunares',
        description: 'Guía mensual con rituales según las fases de la luna para potenciar tu energía.'
    }
];

const incluye = [
    '1 Lectura mensual de Carta Natal personalizada',
    'Recomendación de Flores de Bach según tu momento',
    'Acceso a grupo privado de WhatsApp',
    'Rituales y prácticas mensuales',
    'Calendario lunar personalizado',
    'Descuento del 20% en sesiones individuales',
    'Contenido exclusivo sobre astrología y autoconocimiento',
    'Comunidad de mujeres en el mismo camino'
];

const MembresiaMensual = () => {
    return (
        <div className="membresia-page">
            {/* Hero Section */}
            <section className="membresia-hero">
                <div className="membresia-hero-content">
                    <div className="membresia-badge">
                        <Moon size={16} />
                        <span>Acompañamiento Mensual</span>
                    </div>
                    <h1 className="membresia-h1">Membresía Lunar</h1>
                    <p className="membresia-hero-subtitle">
                        Un espacio de acompañamiento mensual donde la astrología, las flores de Bach
                        y los rituales lunares se unen para guiarte en tu camino de autoconocimiento.
                    </p>
                    <div className="membresia-price">
                        <span className="price-amount">47€</span>
                        <span className="price-period">/mes</span>
                    </div>
                </div>
                <div className="membresia-hero-image">
                    <img
                        src="/img/taller.jpg"
                        alt="Membresía Lunar - Acompañamiento Mensual"
                    />
                </div>
            </section>

            {/* What is Section */}
            <section className="membresia-section membresia-what">
                <div className="membresia-container">
                    <h2 className="membresia-h2">¿Qué es la Membresía Lunar?</h2>
                    <div className="membresia-content-grid">
                        <div className="membresia-text-content">
                            <p>
                                La <strong>Membresía Lunar</strong> es un programa de acompañamiento mensual
                                diseñado para mujeres que desean profundizar en su autoconocimiento a través
                                de la astrología, las esencias florales y los ciclos lunares.
                            </p>
                            <p>
                                Cada mes recibirás una lectura personalizada de tu carta natal enfocada en
                                el momento que estás viviendo, junto con una selección de Flores de Bach
                                específicas para acompañar tu proceso emocional.
                            </p>
                            <p>
                                Además, tendrás acceso a un grupo privado de WhatsApp donde podrás compartir,
                                consultar y recibir apoyo continuo, junto con rituales lunares mensuales para
                                conectar con los ciclos naturales y potenciar tu energía.
                            </p>
                            <p className="membresia-highlight">
                                <Sparkles size={20} />
                                Un espacio para crecer, sanar y florecer mes a mes.
                            </p>
                        </div>
                        <div className="membresia-image-box">
                            <img src="/img/yoga.jpg" alt="Membresía Lunar" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="membresia-section membresia-benefits">
                <div className="membresia-container">
                    <h2 className="membresia-h2">¿Qué Incluye la Membresía?</h2>
                    <div className="benefits-grid">
                        {beneficios.map((beneficio, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">{beneficio.icon}</div>
                                <h3 className="membresia-h3">{beneficio.title}</h3>
                                <p>{beneficio.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Includes Section */}
            <section className="membresia-section membresia-includes">
                <div className="membresia-container">
                    <h2 className="membresia-h2">Todo lo que Recibes Cada Mes</h2>
                    <div className="includes-grid">
                        {incluye.map((item, index) => (
                            <div key={index} className="include-item">
                                <Check size={24} className="check-icon" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="membresia-section membresia-how">
                <div className="membresia-container">
                    <h2 className="membresia-h2">¿Cómo Funciona?</h2>
                    <div className="how-list">
                        <div className="how-item">
                            <span className="how-number">1</span>
                            <div className="how-content">
                                <h3 className="membresia-h3">Te Suscribes</h3>
                                <p>
                                    Eliges tu plan mensual y te unes a la comunidad de mujeres
                                    que están en el mismo camino de autoconocimiento.
                                </p>
                            </div>
                        </div>

                        <div className="how-item">
                            <span className="how-number">2</span>
                            <div className="how-content">
                                <h3 className="membresia-h3">Recibes tu Lectura</h3>
                                <p>
                                    Cada mes, recibirás por WhatsApp una lectura personalizada de tu carta natal
                                    enfocada en el momento presente y tus necesidades actuales.
                                </p>
                            </div>
                        </div>

                        <div className="how-item">
                            <span className="how-number">3</span>
                            <div className="how-content">
                                <h3 className="membresia-h3">Flores de Bach Personalizadas</h3>
                                <p>
                                    Junto con tu lectura, recibirás la recomendación de Flores de Bach
                                    específicas para apoyar tu proceso emocional del mes.
                                </p>
                            </div>
                        </div>

                        <div className="how-item">
                            <span className="how-number">4</span>
                            <div className="how-content">
                                <h3 className="membresia-h3">Acompañamiento Continuo</h3>
                                <p>
                                    Tendrás acceso al grupo privado de WhatsApp para compartir, consultar
                                    y recibir apoyo durante todo el mes.
                                </p>
                            </div>
                        </div>

                        <div className="how-item">
                            <span className="how-number">5</span>
                            <div className="how-content">
                                <h3 className="membresia-h3">Rituales Lunares</h3>
                                <p>
                                    Cada fase lunar recibirás rituales y prácticas para conectar con
                                    los ciclos naturales y potenciar tu energía.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Who Section */}
            <section className="membresia-section membresia-for-who">
                <div className="membresia-container">
                    <h2 className="membresia-h2">¿Para Quién es Esta Membresía?</h2>
                    <div className="for-who-content">
                        <p className="for-who-intro">
                            Esta membresía es para ti si:
                        </p>
                        <div className="for-who-grid">
                            <div className="for-who-card">
                                <p>Buscas un acompañamiento constante en tu camino de autoconocimiento</p>
                            </div>
                            <div className="for-who-card">
                                <p>Quieres entender mejor tu carta natal y cómo aplicarla a tu vida</p>
                            </div>
                            <div className="for-who-card">
                                <p>Deseas trabajar tus emociones con Flores de Bach</p>
                            </div>
                            <div className="for-who-card">
                                <p>Te atrae conectar con los ciclos lunares y naturales</p>
                            </div>
                            <div className="for-who-card">
                                <p>Valoras el apoyo de una comunidad de mujeres conscientes</p>
                            </div>
                            <div className="for-who-card">
                                <p>Buscas un espacio accesible y sostenible para tu crecimiento personal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="membresia-section membresia-pricing">
                <div className="membresia-container">
                    <h2 className="membresia-h2">Inversión Mensual</h2>
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <Moon size={48} className="pricing-icon" />
                            <h3 className="pricing-title">Membresía Lunar</h3>
                            <div className="pricing-amount">
                                <span className="amount">47€</span>
                                <span className="period">/mes</span>
                            </div>
                            <p className="pricing-subtitle">Cancela cuando quieras, sin permanencia</p>
                        </div>
                        <div className="pricing-features">
                            <div className="feature-item">
                                <Check size={20} />
                                <span>Lectura mensual de Carta Natal</span>
                            </div>
                            <div className="feature-item">
                                <Check size={20} />
                                <span>Flores de Bach personalizadas</span>
                            </div>
                            <div className="feature-item">
                                <Check size={20} />
                                <span>Grupo privado de WhatsApp</span>
                            </div>
                            <div className="feature-item">
                                <Check size={20} />
                                <span>Rituales lunares mensuales</span>
                            </div>
                            <div className="feature-item">
                                <Check size={20} />
                                <span>20% descuento en sesiones individuales</span>
                            </div>
                            <div className="feature-item">
                                <Check size={20} />
                                <span>Contenido exclusivo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="membresia-section membresia-cta">
                <div className="membresia-cta-content">
                    <Star size={48} className="cta-icon" />
                    <h2 className="membresia-h2">¿Lista para Comenzar tu Viaje Lunar?</h2>
                    <p className="membresia-cta-text">
                        Únete a la Membresía Lunar y comienza a vivir en sintonía con tus ciclos,
                        tu esencia y tu propósito.
                    </p>
                    <a
                        href="https://wa.me/34123456789?text=Hola%20Mónica,%20me%20interesa%20la%20Membresía%20Lunar"
                        className="membresia-cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Quiero Unirme <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default MembresiaMensual;
