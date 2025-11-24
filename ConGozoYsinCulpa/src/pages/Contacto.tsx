import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Calendar, Info } from 'lucide-react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      alert('Por favor, acepta la Política de Privacidad para continuar.');
      return;
    }

    if (!formData.nombre || !formData.email) {
      alert('Por favor, completa los campos obligatorios (Nombre y Email).');
      return;
    }

    // Construir mensaje de WhatsApp
    let message = `*Nueva consulta desde el formulario web*\n\n`;
    message += `👤 *Nombre:* ${formData.nombre}\n`;
    if (formData.telefono) message += `📞 *Teléfono:* ${formData.telefono}\n`;
    message += `📧 *Email:* ${formData.email}\n`;
    if (formData.asunto) message += `📋 *Asunto:* ${formData.asunto}\n`;
    if (formData.mensaje) message += `\n💬 *Mensaje:*\n${formData.mensaje}`;

    const phoneNumber = '651099990';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    // Limpiar formulario
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
    setPrivacyAccepted(false);
  };

  const quickActions = [
    {
      icon: <Calendar size={24} />,
      title: 'Reservar Cita',
      description: 'Agenda tu sesión de terapia',
      message: 'Hola! Me gustaría reservar una cita. ¿Cuál es tu disponibilidad?'
    },
    {
      icon: <Info size={24} />,
      title: 'Solicitar Información',
      description: 'Pregunta sobre servicios',
      message: 'Hola! Me gustaría recibir más información sobre tus servicios.'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Consulta General',
      description: 'Cualquier otra pregunta',
      message: 'Hola! Tengo una consulta: '
    }
  ];

  const handleQuickAction = (message: string) => {
    const phoneNumber = '651099990';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="page-container contacto-page">
      <section className="contacto-hero">
        <h1>Contacta</h1>
        <p className="contacto-subtitle">
          Todas mis visitas son en horas concertadas. Te daré respuesta en plazo máximo 24h, de Lunes a Viernes.
        </p>
      </section>

      <section className="contacto-info-section">
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">
              <Phone size={28} />
            </div>
            <h3>Teléfono / WhatsApp</h3>
            <a href="tel:+34651099990">+34 651 09 99 90</a>
            <p className="info-note">WhatsApp, SMS o llamada</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Mail size={28} />
            </div>
            <h3>Email</h3>
            <a href="mailto:info@monicahrosety.com">info@monicahrosety.com</a>
            <p className="info-note">Respuesta en 24h</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <MapPin size={28} />
            </div>
            <h3>Ubicación</h3>
            <p>Zona CABRILS / BARCELONA</p>
            <p className="info-note">Lunes a Viernes</p>
          </div>
        </div>
      </section>

      <section className="quick-actions-section">
        <h2>Acciones Rápidas por WhatsApp</h2>
        <div className="quick-actions-grid">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="quick-action-card"
              onClick={() => handleQuickAction(action.message)}
            >
              <div className="quick-action-icon">{action.icon}</div>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              <button className="quick-action-btn">
                <MessageCircle size={18} />
                Enviar WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="contacto-form-section">
        <h2>Formulario de Contacto</h2>
        <p className="form-intro">
          Rellena el formulario y tu consulta se enviará directamente por WhatsApp. ¡Gracias!
        </p>

        <form onSubmit={handleSubmit} className="contacto-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">
                Nombre <span className="required">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Tu número de teléfono"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Correo electrónico <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <select
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
            >
              <option value="">Selecciona un asunto</option>
              <option value="Reservar cita">Reservar cita</option>
              <option value="Información sobre servicios">Información sobre servicios</option>
              <option value="Información sobre precios">Información sobre precios</option>
              <option value="Círculo de Mujeres">Círculo de Mujeres</option>
              <option value="Consulta general">Consulta general</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={6}
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                required
              />
              <span>
                Acepto la <a href="#" className="privacy-link">Política de Privacidad</a> <span className="required">*</span>
              </span>
            </label>
          </div>

          <button type="submit" className="submit-btn">
            <Send size={20} />
            Enviar por WhatsApp
          </button>

          <p className="form-note">
            <span className="required">*</span> Campos obligatorios
          </p>
        </form>

        <div className="privacy-notice">
          <p>
            <strong>Protección de Datos:</strong> De conformidad con la Ley Orgánica 15/99, de 13 de diciembre,
            de Protección de Datos de Carácter Personal, se informa que los datos facilitados serán introducidos
            en la base de datos de Mónica Hernández Rosety, con la finalidad de informarle de nuestras actividades
            y servicios. En todo caso, podrá ejercer el derecho a consultar, acceder, rectificar, cancelar o bien
            oponerse al tratamiento de sus datos.
          </p>
        </div>
      </section>

      <section className="horario-section">
        <h3>Horario de Atención</h3>
        <p>
          Para todos mis servicios de masaje, te atiendo en mi consulta de <strong>lunes a viernes</strong>.
        </p>
        <p>
          Para otras ubicaciones y fines de semana, <strong>consúltame disponibilidad y tarifas</strong>.
        </p>
      </section>
    </div>
  );
};

export default Contacto;
