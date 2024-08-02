import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ContactInfo.css';

function ContactInfo({ personas }) {
  const { id } = useParams();
  const persona = personas.find(p => p.id === parseInt(id, 10));

  if (!persona) return <div className="contact-info-not-found">Contact not found</div>;

  return (
    <div className="contact-info-page">
      <div className="contact-info-header">
        <Link to="/" className="contact-info-back-button">
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