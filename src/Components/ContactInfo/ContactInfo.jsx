import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ContactInfo.css';

/**
 * Renderiza la información de contacto para una persona determinada.
 *
 * @param {Object} props - Los propiedades pasadas al componente.
 * @param {Array} props.personas - El array de personas.
 * @return {JSX.Element} El elemento JSX que representa la información de contacto.
 */

function ContactInfo({ personas }) {
    const { id } = useParams();
    const persona = personas.find(p => p.id === parseInt(id, 10));

    if (!persona) return <div className="contact-info-not-found">Contacto no encontrado</div>;

    return (
        <div className="contact-info-page">
        <div className="contact-info-header">
          <Link to={`/${id}`} className="contact-info-back-button">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h2>Contact Info</h2>
        </div>
        <div className="contact-info-profile">
          <img src={persona.fotoPerfil} alt={persona.nombre} className="contact-info-profile-pic" />
          <h3>{persona.nombre}</h3>
        </div>
        <div className="contact-info-details">
          <div className="contact-info-detail-item">
            <i className="fas fa-phone"></i>
            <span>{persona.telefono || 'No phone number'}</span>
          </div>
          <div className="contact-info-detail-item">
            <i className="fas fa-envelope"></i>
            <span>{persona.email || 'No email'}</span>
          </div>
          <div className="contact-info-detail-item">
            <i className="fas fa-info-circle"></i>
            <span>{persona.status || 'Hey there! I am using WhatsApp.'}</span>
          </div>
        </div>
      </div>
    );
  }

export default ContactInfo;