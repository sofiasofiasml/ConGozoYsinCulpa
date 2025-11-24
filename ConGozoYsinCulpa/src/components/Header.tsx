

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen((prev) => !prev);
	const handleClose = () => setOpen(false);

	return (
		<header className="header">
			<div className="header__logo">
				<h1>Con Gozo y Sin Culpa</h1>
			</div>
			<button className="header__menu-toggle" onClick={handleToggle} aria-label="Abrir menú">
				&#9776;
			</button>
			<nav className={`header__nav${open ? ' open' : ''}`} onClick={handleClose}>
				<Link to="/">Inicio</Link>
				<Link to="/servicios">Servicios</Link>
				<Link to="/circulo-mujeres">Círculo de Mujeres</Link>
				<Link to="/sobre-mi">Sobre mí</Link>
				<Link to="/contacto">Contacto</Link>
			</nav>
		</header>
	);
};

export default Header;
