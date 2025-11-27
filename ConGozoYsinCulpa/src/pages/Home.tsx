import './Home.css';
import { Flower2, Heart, Sparkles, ArrowRight, Leaf,  Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const servicios = [
	{
		titulo: 'Ritual Corporal Femenino',
		img: '/img/masaje.jpg',
		desc: 'Masaje terapéutico + Guía de tu alma. Una experiencia de sanación profunda.',
		precio: 'Desde 85€',
		link: '/ritual-corporal',
		icon: <Flower2 size={24} />
	},
	{
		titulo: 'Círculo de Mujeres',
		img: '/img/yoga.jpg',
		desc: 'Espacio sagrado de encuentro, escucha y sanación colectiva cada luna llena.',
		precio: 'Desde 25€',
		link: '/circulo-mujeres',
		icon: <Heart size={24} />
	},
	{
		titulo: 'Membresía Lunar',
		img: '/img/taller.jpg',
		desc: 'Acompañamiento mensual con carta natal, flores de Bach y rituales lunares.',
		precio: '47€/mes',
		link: '/membresia-mensual',
		icon: <Star size={24} />
	}
];

const Home = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % servicios.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + servicios.length) % servicios.length);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<div className="home-container">
			{/* Hero Section */}
			<section className="hero-section">
				<div className="hero-content">
					<div className="hero-badge">
						<Leaf size={16} />
						<span>Bienestar Integral</span>
					</div>
					<h1 className="hero-title">
						Con Gozo y <span className="italic-accent">Sin Culpa</span>
					</h1>
					<p className="hero-subtitle">
						Un refugio para el autoconocimiento, la sanación y la conexión femenina.
						Redescubre tu poder interior en un espacio seguro y amoroso.
					</p>
					<Link to="/contacto">
						<button className="primary-button">
							Comienza tu Viaje <ArrowRight size={18} />
						</button>
					</Link>
				</div>
				<div className="hero-image-container">
					<img
						src="/img/logo.avif"
						alt="Con Gozo y Sin Culpa"
						className="hero-main-image"
					/>
					<div className="hero-decoration-circle"></div>
				</div>
			</section>

			{/* Philosophy Section */}
			<section className="philosophy-section">
				<div className="section-header">
					<h2 className="section-title">Nuestra Esencia</h2>
					<div className="section-divider"></div>
					<p className="section-description">
						Creemos en el poder de la suavidad y la escucha. Este proyecto nace para acompañar
						a mujeres que buscan reencontrarse consigo mismas, soltar cargas y vivir desde
						el placer y la autenticidad.
					</p>
				</div>

				<div className="features-grid">
					<div className="feature-card">
						<div className="feature-icon-wrapper"><Flower2 size={28} /></div>
						<h3>Sanación</h3>
						<p>Liberar tensiones y emociones estancadas a través del cuerpo.</p>
					</div>
					<div className="feature-card">
						<div className="feature-icon-wrapper"><Heart size={28} /></div>
						<h3>Comunidad</h3>
						<p>Tejer redes de apoyo donde cada voz es escuchada y valorada.</p>
					</div>
					<div className="feature-card">
						<div className="feature-icon-wrapper"><Sparkles size={28} /></div>
						<h3>Transformación</h3>
						<p>Renovar tu energía y perspectiva para una vida más plena.</p>
					</div>
				</div>
			</section>

			{/* Services Carousel Section */}
			<section className="services-carousel-section">
				<h2 className="section-title text-center">Nuestros Servicios</h2>
				<p className="section-subtitle text-center">Descubre las experiencias que tenemos para ti</p>

				<div className="carousel-container">
					<button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Anterior">
						<ChevronLeft size={20} />
					</button>

					<div className="carousel-wrapper">
						<div
							className="carousel-track"
							style={{ transform: `translateX(calc(-${currentSlide} * 100%))` }}
						>
							{servicios.map((servicio, index) => (
								<div key={index} className="carousel-slide">
									<div className="service-carousel-card">
										<div className="service-carousel-image">
											<img src={servicio.img} alt={servicio.titulo} />
											<div className="service-carousel-overlay">
												<Link to={servicio.link} className="service-carousel-btn">
													Ver Detalles
												</Link>
											</div>
										</div>
										<div className="service-carousel-content">
											<div className="service-carousel-header">
												<span className="service-carousel-icon">{servicio.icon}</span>
												<h3>{servicio.titulo}</h3>
											</div>
											<p className="service-carousel-desc">{servicio.desc}</p>
											<div className="service-carousel-footer">
												<span className="service-carousel-price">{servicio.precio}</span>
												<Link to={servicio.link} className="service-carousel-link">
													Más info <ArrowRight size={16} />
												</Link>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Siguiente">
						<ChevronRight size={20} />
					</button>
				</div>

				<div className="carousel-dots">
					{servicios.map((_, index) => (
						<button
							key={index}
							className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
							onClick={() => goToSlide(index)}
							aria-label={`Ir a servicio ${index + 1}`}
						></button>
					))}
				</div>

				<div className="services-cta">
					<Link to="/servicios" className="services-view-all">
						Ver Todos los Servicios <ArrowRight size={18} />
					</Link>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-minimal">
				<div className="cta-content-wrapper">
					<h2>¿Lista para priorizarte?</h2>
					<p>Tu bienestar no es un lujo, es una necesidad. Da el primer paso hoy.</p>
					<Link to="/contacto">
						<button className="outline-button">Agenda tu Sesión</button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;