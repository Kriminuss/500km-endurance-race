import React from 'react';
import './Hero.css';
import hondaCivic from '../assets/images/honda-civic.jpg'; // Importa la imagen desde src

const Hero = () => {
  return (
    <section className="hero">
      <div className="background-image" /> {/* Imagen de fondo difuminada */}
      <div className="hero-text">
        <h1>500KM</h1>
        <h1>ENDURANCE</h1>
        <h1>RACE</h1>
        <p>
          Descubre el campeonato 500Km. Evento creado para los amantes del motor y la adrenalina,
          donde podrás disfrutar de un desafío único de resistencia.
        </p>
        <p>
          A lo largo de la temporada, se celebrarán 7 emocionantes carreras en distintos circuitos,
          poniendo a prueba la velocidad, estrategia y el trabajo de equipo.
        </p>
        <p>
          Cada carrera ofrecerá una experiencia única, llena de adrenalina y competición intensa.
          Prepárate para vivir la emoción y la pasión de los 500Km como nunca antes.
        </p>
        <p>¿Te lo vas a perder?</p>
      </div>
    </section>
  );
};

export default Hero;
