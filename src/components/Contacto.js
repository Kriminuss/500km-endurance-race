import React, { useState } from 'react';
import './Contacto.css'; // Importamos los estilos del formulario

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías implementar el envío del formulario a un backend o servicio de correo electrónico
    console.log('Datos del formulario enviados:', formData);
    setFormSubmitted(true);
  };

  return (
    <section id="contacto" className="contacto-section">
      <h2>Contacto</h2>

      {formSubmitted ? (
        <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
      ) : (
        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto:</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      )}
    </section>
  );
};

export default Contacto;
