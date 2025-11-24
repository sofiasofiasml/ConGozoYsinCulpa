
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import RitualCorporal from './pages/RitualCorporal';
import CirculoMujeres from './pages/CirculoMujeres';
import MembresiaMensual from './pages/MembresiaMensual';
import Precios from './pages/Precios';
// import Blog from './pages/Blog';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ritual-corporal" element={<RitualCorporal />} />
          <Route path="/circulo-mujeres" element={<CirculoMujeres />} />
          <Route path="/membresia-mensual" element={<MembresiaMensual />} />
          <Route path="/precios" element={<Precios />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
