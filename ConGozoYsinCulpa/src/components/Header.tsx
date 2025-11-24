import { useState, useEffect } from 'react';

import './Header.css';

const Header = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeLink, setActiveLink] = useState('/');

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
	const handleClose = () => setOpen(false);
	const handleLinkClick = (path: string) => {
		setActiveLink(path);
		handleClose();
	};

	const navItems = [
		{ path: '/', label: 'Inicio', icon: '🏠' },
		{ path: '/servicios', label: 'Servicios', icon: '✨' },
		{ path: '/circulo-mujeres', label: 'Círculo de Mujeres', icon: '🌙' },
		{ path: '/sobre-mi', label: 'Sobre mí', icon: '💜' },
		{ path: '/contacto', label: 'Contacto', icon: '📧' }
	];

	return (
		<>
			

			<header className={`header${scrolled ? ' header--scrolled' : ''}`}>
				<div className="header__container">
					<a 
						href="#" 
						className="header__logo" 
						onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}
					>
						<div className="header__logo-container">
							<img
								src="/img/logo.avif"
								alt="Con Gozo y Sin Culpa logo"
								className="header__logo-img"
							/>
						</div>
						<h1>Con Gozo y Sin Culpa</h1>
					</a>

					<button 
						className={`header__menu-toggle${open ? ' active' : ''}`}
						onClick={handleToggle} 
						aria-label={open ? "Cerrar menú" : "Abrir menú"}
						aria-expanded={open}
					>
						<span className="hamburger-line"></span>
						<span className="hamburger-line"></span>
						<span className="hamburger-line"></span>
					</button>

					<nav className={`header__nav${open ? ' open' : ''}`}>
						{navItems.map((item) => (
							<a
								key={item.path}
								href={item.path}
								className={`header__nav-link${activeLink === item.path ? ' active' : ''}`}
								onClick={(e) => { e.preventDefault(); handleLinkClick(item.path); }}
							>
								<span className="nav-icon">{item.icon}</span>
								<span className="nav-text">{item.label}</span>
							</a>
						))}
						<a 
							href="/contacto" 
							className="header__cta"
							onClick={(e) => { e.preventDefault(); handleLinkClick('/contacto'); }}
						>
							Agenda tu sesión
						</a>
					</nav>
				</div>

				{open && <div className="header__overlay" onClick={handleClose}></div>}
			</header>

		
		</>
	);
};

export default Header;