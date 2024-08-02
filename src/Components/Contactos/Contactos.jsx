import React from 'react';
import ContactList from '../ContactList/ContactList';
import './Contactos.css';

/**
 * Renderiza el componente Contactos con una lista de contactos de Whatsapp.
 *
 * @param {Object} props - El objeto de props que contiene la lista de contactos de Whatsapp
 * @returns {JSX.Element} - El componente Contactos renderizado
 */

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