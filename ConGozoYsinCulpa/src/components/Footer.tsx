
import './Footer.css';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => (
	<footer className="footer">
		<div className="footer-content">
			<div className="footer-logo">Con Gozo y Sin Culpa</div>
			<div className="footer-links">
				<a href="#" aria-label="Instagram"><Instagram size={20} /></a>
				<a href="#" aria-label="Email"><Mail size={20} /></a>
			</div>
			<div className="footer-divider"></div>
			<p>&copy; {new Date().getFullYear()} Con Gozo y Sin Culpa. Todos los derechos reservados.</p>
		</div>
	</footer>
);

export default Footer;
