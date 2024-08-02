import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renderiza una lista de contactos basada en el array `personas` proporcionado.
 *
 * @param {Object} props - El objeto de props que contiene el array `personas`.
 * @param {Array<Object>} props.personas - Un array de objetos de contactos.
 * @property {number} props.personas[].id - El identificador único del contacto.
 * @property {string} props.personas[].nombre - El nombre del contacto.
 * @property {string} props.personas[].fotoPerfil - La URL de la foto de perfil del contacto.
 * @return {JSX.Element} Un elemento JSX que representa la lista de contactos.
 */

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