import './Home.css';

const proyectos = [
	{
		titulo: 'Masajes terapéuticos',
		img: '/img/masaje.jpg',
		desc: 'Relajación y bienestar físico y emocional.'
	},
	{
		titulo: 'Círculo de Mujeres',
		img: '/img/yoga.jpg',
		desc: 'Encuentros de apoyo y crecimiento personal.'
	},
	{
		titulo: 'Talleres de autocuidado',
		img: '/img/taller.jpg',
		desc: 'Espacios para aprender y compartir.'
	},
	{
		titulo: 'Acompañamiento individual',
		img: '/img/acompanamiento.jpg',
		desc: 'Procesos personalizados para tu bienestar.'
	},
];

const Home = () => (
	<section className="home-root">
		<div className="home-hero">
			<div className="hero-decoration"></div>
			<img
				src="/img/logo-congozo.png"
				alt="Con Gozo y Sin Culpa logo"
				className="home-logo"
			/>
			<h2 className="hero-title">Bienvenida a Con Gozo y Sin Culpa</h2>
			<p className="hero-subtitle">Un espacio de bienestar, autoconocimiento y conexión femenina</p>
		</div>

		<div className="wellness-card">
			<div className="wellness-decoration"></div>
			<h3 className="wellness-title">Tu camino hacia el bienestar</h3>
			<p className="wellness-intro">
				Este proyecto nace para acompañar a mujeres en su camino de autoconocimiento, autocuidado y bienestar a través de masajes terapéuticos y espacios de círculo de mujeres.
			</p>
			<div className="wellness-features">
				<div className="feature-item">
					<span className="feature-icon">🌸</span>
					<h4>Masajes terapéuticos</h4>
					<p>Relajación profunda y sanación</p>
				</div>
				<div className="feature-item">
					<span className="feature-icon">🌙</span>
					<h4>Círculo de mujeres</h4>
					<p>Encuentros sagrados de hermandad</p>
				</div>
				<div className="feature-item">
					<span className="feature-icon">✨</span>
					<h4>Acompañamiento</h4>
					<p>Procesos personalizados</p>
				</div>
			</div>
		</div>

		<section className="proyectos-section">
			<h3 className="section-title">Nuestros servicios</h3>
			<p className="section-subtitle">Descubre las experiencias que tenemos para ti</p>
			<div className="proyectos-scroll">
				{proyectos.map((p, i) => (
					<div className="proyecto-card" key={i}>
						<div className="proyecto-image-wrapper">
							<img src={p.img} alt={p.titulo} className="proyecto-img" />
							<div className="proyecto-overlay"></div>
						</div>
						<div className="proyecto-info">
							<h4>{p.titulo}</h4>
							<p>{p.desc}</p>
							<button className="proyecto-btn">Más información</button>
						</div>
					</div>
				))}
			</div>
		</section>

		<section className="cta-section">
			<div className="cta-content">
				<h3>¿Lista para comenzar tu transformación?</h3>
				<p>Únete a nuestra comunidad de mujeres que eligen vivir con gozo y sin culpa</p>
				<button className="cta-button">Agenda tu primera sesión</button>
			</div>
		</section>
	</section>
);

export default Home;