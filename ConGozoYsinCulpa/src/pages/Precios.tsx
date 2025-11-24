import { Check, Star, Sparkles, Phone } from 'lucide-react';
import './Precios.css';

const pricingPackages = [
    {
        id: 1,
        title: 'Tratamiento Desbloqueo + Tántrico',
        duration: '2 horas',
        price: 220,
        badge: 'CONOCE COMO TRABAJO',
        badgeColor: 'info',
        icon: '🌷',
        features: [
            '45 minutos de Masaje Desbloqueo en camilla',
            '45 minutos de Masaje Tántrico en tatami'
        ],
        whatsappMessage: 'Hola! Me gustaría reservar el Tratamiento Desbloqueo + Tántrico de 2 horas (220€)'
    },
    {
        id: 2,
        title: 'Tratamiento Desbloqueo + Tántrico',
        duration: '2 horas y 30 minutos',
        price: 275,
        badge: 'EN PROMOCIÓN',
        badgeColor: 'promo',
        icon: '🌷',
        featured: true,
        features: [
            'Masaje Desbloqueo en camilla',
            'Masaje Tántrico en tatami'
        ],
        whatsappMessage: 'Hola! Me gustaría reservar el Tratamiento Desbloqueo + Tántrico de 2h 30min (275€)'
    },
    {
        id: 3,
        title: 'Tratamiento Desbloqueo + Tántrico',
        duration: '3 horas',
        price: 300,
        badge: 'MI SERVICIO MÁS COMPLETO',
        badgeColor: 'premium',
        icon: '🌷',
        recommended: true,
        features: [
            'Masaje Desbloqueo en camilla',
            'Desbloqueo Energético',
            'Masaje Tántrico en tatami'
        ],
        highlight: 'RECOMENDADO TRABAJO PROFUNDO',
        whatsappMessage: 'Hola! Me gustaría reservar el Tratamiento Desbloqueo + Tántrico de 3 horas (300€)'
    },
    {
        id: 4,
        title: 'Tratamiento Desbloqueo o Desbloqueo Sexualidad',
        duration: '1 hora y 30 minutos',
        price: 120,
        badge: 'SESIÓN INDIVIDUAL',
        badgeColor: 'info',
        icon: '🌷',
        features: [
            'Masaje Desbloqueo en camilla'
        ],
        whatsappMessage: 'Hola! Me gustaría reservar el Tratamiento Desbloqueo de 1h 30min (120€)'
    }
];

const Precios = () => {
    const handleWhatsAppClick = (message: string) => {
        const phoneNumber = '651099990';
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="page-container precios-page">
            <section className="precios-hero">
                <h1>Tarifa de Precios</h1>
                <p className="precios-subtitle">
                    Elige el tratamiento que mejor se adapte a tus necesidades
                </p>
                <div className="contact-info">
                    <Phone size={20} />
                    <span>Pide tu cita ahora al <a href="tel:651099990">651 099 990</a></span>
                </div>
            </section>

            <section className="pricing-section">
                <div className="section-header">
                    <h2>Tratamientos de Masaje Desbloqueo Sexualidad + Tantra</h2>
                </div>

                <div className="pricing-grid">
                    {pricingPackages.slice(0, 3).map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`pricing-card ${pkg.featured ? 'featured' : ''} ${pkg.recommended ? 'recommended' : ''}`}
                        >
                            {pkg.badge && (
                                <div className={`pricing-badge ${pkg.badgeColor}`}>
                                    {pkg.badge}
                                </div>
                            )}

                            {pkg.recommended && (
                                <div className="recommended-star">
                                    <Star size={24} fill="currentColor" />
                                </div>
                            )}

                            <div className="pricing-header">
                                <span className="pricing-icon">{pkg.icon}</span>
                                <h3>{pkg.title}</h3>
                                <p className="pricing-duration">{pkg.duration}</p>
                            </div>

                            <div className="pricing-price">
                                <span className="price-amount">€{pkg.price}</span>
                                <span className="price-label">SESIÓN</span>
                            </div>

                            <ul className="pricing-features">
                                {pkg.features.map((feature, index) => (
                                    <li key={index}>
                                        <Check size={18} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {pkg.highlight && (
                                <div className="pricing-highlight">
                                    <Sparkles size={16} />
                                    <span>{pkg.highlight}</span>
                                </div>
                            )}

                            <button
                                className="pricing-cta"
                                onClick={() => handleWhatsAppClick(pkg.whatsappMessage)}
                            >
                                Reserva tu sesión
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pricing-section secondary">
                <div className="section-header">
                    <h2>Sesiones de Tratamiento Desbloqueo o Desbloqueo Sexualidad</h2>
                </div>

                <div className="pricing-grid single">
                    {pricingPackages.slice(3).map((pkg) => (
                        <div key={pkg.id} className="pricing-card">
                            {pkg.badge && (
                                <div className={`pricing-badge ${pkg.badgeColor}`}>
                                    {pkg.badge}
                                </div>
                            )}

                            <div className="pricing-header">
                                <span className="pricing-icon">{pkg.icon}</span>
                                <h3>{pkg.title}</h3>
                                <p className="pricing-duration">{pkg.duration}</p>
                            </div>

                            <div className="pricing-price">
                                <span className="price-amount">€{pkg.price}</span>
                                <span className="price-label">SESIÓN</span>
                            </div>

                            <ul className="pricing-features">
                                {pkg.features.map((feature, index) => (
                                    <li key={index}>
                                        <Check size={18} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="pricing-cta"
                                onClick={() => handleWhatsAppClick(pkg.whatsappMessage)}
                            >
                                Reserva tu sesión
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="precios-footer-cta">
                <h3>¿Tienes dudas sobre qué tratamiento elegir?</h3>
                <p>Contáctame y te ayudaré a encontrar el tratamiento perfecto para ti</p>
                <button
                    className="primary-button"
                    onClick={() => handleWhatsAppClick('Hola! Tengo dudas sobre qué tratamiento elegir. ¿Podrías ayudarme?')}
                >
                    Contactar por WhatsApp
                </button>
            </section>
        </div>
    );
};

export default Precios;
