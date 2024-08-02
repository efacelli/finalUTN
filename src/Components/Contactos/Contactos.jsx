import React from 'react';
import ContactList from '../ContactList/ContactList';
import './Contactos.css';

function Contactos({ personas }) {
  return (
    <div className="contactos-page">
      <div className="contactos-container">
        <h1>Whatsapp</h1>
        <ContactList personas={personas} />
      </div>
    </div>
  );
}

export default Contactos;