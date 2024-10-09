import React from 'react';
import './Galeria.css'; // Importamos los estilos de la galería

const Galeria = () => {
  return (
    <section id="galeria" className="galeria-section">
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
  );
};

export default Galeria;
