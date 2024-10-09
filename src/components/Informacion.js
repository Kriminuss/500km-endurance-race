import React from 'react';
import './Informacion.css'; // Importamos los estilos de la sección

const Informacion = () => {
  return (
    <section id="informacion" className="informacion-section">
      <h2>Información del Campeonato</h2>
      <div className="informacion-gallery">
        {/* Añadimos 4 imágenes en lugar del texto */}
        <img src="/images/500-1.jpg" alt="Foto 1 del Campeonato" />
        <img src="/images/500-2.jpg" alt="Foto 2 del Campeonato" />
        <img src="/images/500-3.jpg" alt="Foto 3 del Campeonato" />
    
          </div>

           {/* Botón para descargar la información */}
      <div className="informacion-download">
        {/* Opción 1: Botón grande */}
        <a href="/informacion-completa.pdf" download className="download-button">
          Descarga aquí la información completa
        </a>
        </div>
    
    </section>
  );
};

export default Informacion;
