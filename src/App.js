import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero'; // Importamos el Hero
import Header from './components/Header'; // Importamos el Header
import Circuitos from './components/Circuitos'; // Importamos el componente Circuitos
import Informacion from './components/Informacion'; // Importamos el componente de Informacion
import Contacto from './components/Contacto'; // Importamos el componente de Contacto

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkDevice();

    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);

  return (
    <div className={`App ${isMobile ? 'mobile' : 'desktop'}`}>
      <header>
        <nav className="nav">
          <a href="#circuitos">Circuitos</a>
          <a href="#informacion">Información</a>
          <a href="#contacto">Contacto</a>
          <a href="#galeria">Galería</a>
        </nav>
      </header>

      {/* Componente Hero */}
      <Hero />

      {/* Sección de Circuitos */}
      <Circuitos />

      {/* Sección de Información */}
      <Informacion />

      {/* Formulario de Contacto */}
      <Contacto />

      {/* Sección de Galería con botones */}
      <section id="galeria">
        <h2>Galería</h2>
        <div className="galeria-buttons">
          <a
            href="https://drive.google.com/drive/folders/1-50p9RW8xYeSzFQ3jSQ5hr-ZRQUGlJAi"
            target="_blank"
            rel="noopener noreferrer"
            className="galeria-button"
          >
            1ª prueba Rratok 2024
          </a>
          <a
            href="https://drive.google.com/drive/folders/1yoWekLEByWBqZq2GuafQd42LLiamcwUi"
            target="_blank"
            rel="noopener noreferrer"
            className="galeria-button"
          >
            2ª prueba Calafat 2024
          </a>
          <a
            href="https://drive.google.com/drive/folders/1hnGeb7NmMG2Pf-bcWL0fG1-QiEPvpmiI"
            target="_blank"
            rel="noopener noreferrer"
            className="galeria-button"
          >
            3ª prueba Kotarr 2024
          </a>
        </div>
      </section>

      {/* Botón "Volver al inicio" */}
      <button id="back-to-top" title="Volver al inicio">
        ↑
      </button>
    </div>
  );
}

export default App;
