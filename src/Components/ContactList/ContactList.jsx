import React from 'react';
import { Link } from 'react-router-dom';

function ContactList({ personas }) {
  return (
    <ul className="contact-list">
      {personas.map(persona => (
        <li key={persona.id} className="contact-item">
          <Link to={`/${persona.id}`} className="contact-link">
            <img src={persona.fotoPerfil} alt={persona.nombre} className="contact-avatar" />
            <span className="contact-name">{persona.nombre}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;