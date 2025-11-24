import './Home.css';
import { Flower2, Heart, Sparkles, ArrowRight, Leaf, Sun } from 'lucide-react';

const proyectos = [
	{
		titulo: 'Masajes Terapéuticos',
		img: '/img/masaje.jpg',
		desc: 'Relajación profunda para restaurar tu equilibrio físico y emocional.',
		icon: <Flower2 size={24} />
	},
	{
		titulo: 'Círculo de Mujeres',
		img: '/img/yoga.jpg',
		desc: 'Un espacio seguro de conexión, escucha y crecimiento compartido.',
		icon: <Heart size={24} />
	},
	{
		titulo: 'Talleres de Autocuidado',
		img: '/img/taller.jpg',
		desc: 'Herramientas prácticas para cultivar tu bienestar diario.',
		icon: <Sun size={24} />
	},
	{
		titulo: 'Acompañamiento Individual',
		img: '/img/acompanamiento.jpg',
		desc: 'Sesiones personalizadas para guiar tu proceso de transformación.',
		icon: <Sparkles size={24} />
	},
];

const Home = () => (
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
				<button className="primary-button">
					Comienza tu Viaje <ArrowRight size={18} />
				</button>
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

		{/* Services Section */}
		<section className="services-section">
			<h2 className="section-title text-center">Experiencias para Ti</h2>
			<p className="section-subtitle text-center">Descubre nuestros caminos hacia el bienestar</p>

			<div className="services-grid">
				{proyectos.map((p, i) => (
					<div className="service-card" key={i}>
						<div className="service-image">
							<img src={p.img} alt={p.titulo} />
							<div className="service-overlay">
								<button className="service-btn">Ver Detalles</button>
							</div>
						</div>
						<div className="service-content">
							<div className="service-header">
								<span className="service-icon">{p.icon}</span>
								<h3>{p.titulo}</h3>
							</div>
							<p>{p.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>

		{/* CTA Section */}
		<section className="cta-minimal">
			<div className="cta-content-wrapper">
				<h2>¿Lista para priorizarte?</h2>
				<p>Tu bienestar no es un lujo, es una necesidad. Da el primer paso hoy.</p>
				<button className="outline-button">Agenda tu Sesión</button>
			</div>
		</section>
	</div>
);

export default Home;