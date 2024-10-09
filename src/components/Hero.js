import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/honda-civic.jpg)`, // Aplica el fondo correctamente
        backgroundSize: 'cover', // Asegura que la imagen cubra el área
        backgroundRepeat: 'no-repeat', // Evita la repetición
        backgroundPosition: 'center', // Centra la imagen
        backgroundAttachment: 'fixed', // Fija la imagen cuando se hace scroll
      }}
    >
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
