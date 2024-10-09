import React from 'react';
import './Circuitos.css'; // Importamos los estilos de la sección Circuitos

const Circuitos = () => {
  const circuitosData = [
    {
      name: 'Circuito de Kotarr',
      location: 'Tubilla del Lago, Burgos',
      description: 'El Circuito de Kotarr también conocido como Circuito de Velocidad Kotarr es un circuito de velocidad tipo corto que se encuentra en Tubilla del Lago. Es el primer circuito de velocidad de toda Castilla y León y fue inaugurado en agosto de 2008​.',
      length: '2,250 km',
      image: '/images/Trazado-KOTARR.jpg', // Cambia la ruta según donde guardes las imágenes
      mapLink: 'https://maps.app.goo.gl/zep767Gh61ThgvJp6', // Enlace a Google Maps
    },
    {
      name: 'Circuito de Calafat',
      location: 'La Ametlla de Mar, Tarragona',
      description: 'El Circuito de Calafat está situado en Ametlla de Mar, Tarragona. Fue inaugurado en 1974 y es uno de los primeros circuitos permanentes construidos en España. Ha albergado diversas competiciones de automovilismo y motociclismo a lo largo de su historia.',
      length: '3,250 km',
      image: '/images/calafat.jpg',
      mapLink: 'https://maps.app.goo.gl/6tGaPtWs4F6eMmYVA', // Enlace a Google Maps
    },
    {
        name: 'Circuito FK1',
        location: 'Villaverde de Medina, Valladolid',
        description: 'El Circuito FK1, ubicado en Villaverde de Medina, Valladolid, es un circuito de velocidad especialmente diseñado para competiciones de karts, supermotos y motociclismo. Inaugurado en 2007, cuenta con varias configuraciones de trazado, siendo una de las principales instalaciones de karting en España, y es conocido por albergar competiciones a nivel nacional e internacional.',
        length: '2,950 km',
        image: '/images/Fk1.jpg',
        mapLink: 'https://maps.app.goo.gl/ASFfR9QpLnihPu3g7', // Enlace a Google Maps
      },
      {
        name: 'Circuito Quercus Vega',
        location: 'Vega de Tirados, Salamanca',
        description: 'El Circuito Quercus Vega, ubicado en la provincia de Zamora, es un circuito de velocidad diseñado para eventos automovilísticos y de motociclismo. Destacado por su moderno trazado y medidas de seguridad, es un referente para competiciones regionales en Castilla y León.',
        length: '2,950 km',
        image: '/images/Quercus.jpg',
        mapLink: 'https://maps.app.goo.gl/ASFfR9QpLnihPu3g7', // Enlace a Google Maps
      },
      {
        name: 'Circuito de Aspar',
        location: 'Silla, Valencia',
        description: 'El Circuito de Aspar, ubicado en Silla, Valencia, es una instalación moderna dedicada al automovilismo y motociclismo, y lleva el nombre en honor a Jorge Martínez "Aspar", una leyenda del motociclismo español. Este circuito ha sido diseñado para albergar tanto competiciones profesionales como eventos de formación y entrenamiento. La pista, con una longitud de 4,005 km, cuenta con una combinación de curvas rápidas y técnicas, lo que lo convierte en un desafío tanto para pilotos de motos como de coches.',
        length: '4,005 km',
        image: '/images/Aspar.jpg',
        mapLink: 'https://maps.app.goo.gl/7Uqfr22U1bm64uju8', // Enlace a Google Maps
      },
      {
        name: 'Circuito de Alcarras',
        location: 'Alcarrás, Lleida',
        description: 'El Circuito de Alcarràs se encuentra en la localidad de Alcarràs, en la provincia de Lleida, Cataluña. Inaugurado en 2007, este circuito ha ganado popularidad por ser un espacio polivalente para competiciones de automovilismo y motociclismo, así como para pruebas privadas y entrenamientos. Su trazado técnico y variado lo convierte en un reto para pilotos profesionales y amateurs. Además, el circuito acoge campeonatos regionales y nacionales, y ofrece una gran variedad de configuraciones para diferentes tipos de eventos y categorías.',
        length: '3,743 km',
        image: '/images/Alcarrass.jpg',
        mapLink: 'https://maps.app.goo.gl/t131g5smt1MjM1wW9', // Enlace a Google Maps
      },
    // Puedes añadir más circuitos aquí
  ];

  return (
    <section id="circuitos" className="circuitos-section">
      <h2>Circuitos</h2>
      <div className="circuitos-list">
        {circuitosData.map((circuito, index) => (
          <div className="circuito-item" key={index}>
            <img src={circuito.image} alt={`Imagen de ${circuito.name}`} className="circuito-image" />
            <div className="circuito-info">
              <h3>{circuito.name}</h3>
              <p><strong>Ubicación:</strong> {circuito.location}</p>
              <p><strong>Longitud:</strong> {circuito.length}</p>
              <p>{circuito.description}</p>
              {/* Mostramos el enlace a Google Maps solo si está disponible */}
              {circuito.mapLink && (
                <p>
                  <a href={circuito.mapLink} target="_blank" rel="noopener noreferrer">
                    Ver en Google Maps
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Circuitos;
