import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Sparkles, DollarSign, User, Mail, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [serviciosOpen, setServiciosOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [open]);

	const handleToggle = () => setOpen((prev) => !prev);
	const handleClose = () => {
		setOpen(false);
		setServiciosOpen(false);
	};

	const navItems = [
		{ path: '/', label: 'Inicio', icon: <Home size={18} /> },
		{ path: '/precios', label: 'Precios', icon: <DollarSign size={18} /> },
		{ path: '/sobre-mi', label: 'Sobre mí', icon: <User size={18} /> },
		{ path: '/contacto', label: 'Contacto', icon: <Mail size={18} /> }
	];

	const serviciosSubmenu = [
		{ path: '/servicios', label: 'Todos los Servicios' },
		{ path: '/ritual-corporal', label: 'Ritual Corporal Femenino' },
		{ path: '/circulo-mujeres', label: 'Círculo de Mujeres' },
		{ path: '/membresia-mensual', label: 'Membresía Lunar' }
	];

	return (
		<>
			<header className={`header${scrolled ? ' header--scrolled' : ''}`}>
				<div className="header__container">
					<Link
						to="/"
						className="header__logo"
						onClick={handleClose}
					>
						<div className="header__logo-container">
							<img
								src="/img/logo.avif"
								alt="Con Gozo y Sin Culpa logo"
								className="header__logo-img"
							/>
						</div>
						<h1>Con Gozo y Sin Culpa</h1>
					</Link>

					<button
						className={`header__menu-toggle${open ? ' active' : ''}`}
						onClick={handleToggle}
						aria-label={open ? "Cerrar menú" : "Abrir menú"}
						aria-expanded={open}
					>
						{open ? <X size={24} /> : <Menu size={24} />}
					</button>

					<nav className={`header__nav${open ? ' open' : ''}`}>
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`header__nav-link${location.pathname === item.path ? ' active' : ''}`}
								onClick={handleClose}
							>
								<span className="nav-icon">{item.icon}</span>
								<span className="nav-text">{item.label}</span>
							</Link>
						))}

						{/* Servicios Dropdown */}
						<div
							className="header__nav-dropdown"
							onMouseEnter={() => setServiciosOpen(true)}
							onMouseLeave={() => setServiciosOpen(false)}
						>
							<button
								className={`header__nav-link header__nav-dropdown-trigger${location.pathname === '/servicios' ||
										location.pathname === '/ritual-corporal' ||
										location.pathname === '/circulo-mujeres' ||
										location.pathname === '/membresia-mensual' ? ' active' : ''
									}`}
								onClick={() => setServiciosOpen(!serviciosOpen)}
							>
								<span className="nav-icon"><Sparkles size={18} /></span>
								<span className="nav-text">Servicios</span>
								<ChevronDown size={16} className={`dropdown-icon${serviciosOpen ? ' open' : ''}`} />
							</button>

							<div className={`header__dropdown-menu${serviciosOpen ? ' open' : ''}`}>
								{serviciosSubmenu.map((subItem) => (
									<Link
										key={subItem.path}
										to={subItem.path}
										className={`header__dropdown-item${location.pathname === subItem.path ? ' active' : ''}`}
										onClick={handleClose}
									>
										{subItem.label}
									</Link>
								))}
							</div>
						</div>

						<Link
							to="/contacto"
							className="header__cta"
							onClick={handleClose}
						>
							Agenda tu sesión
						</Link>
					</nav>
				</div>

				{open && <div className="header__overlay" onClick={handleClose}></div>}
			</header>
		</>
	);
};

export default Header;