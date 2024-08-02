import React from 'react';
import './Mensaje.css';

/**
 * Renderiza un mensaje con el autor, contenido, fecha y estado.
 *
 * @param {Object} props - Los props del componente Mensaje.
 * @param {string} props.author - El autor del mensaje.
 * @param {string} props.content - El contenido del mensaje.
 * @param {string} props.fecha - La fecha del mensaje.
 * @param {string} props.estado - El estado del mensaje.
 * @return {JSX.Element} El componente Mensaje renderizado.
 */

function Mensaje({ author, content, fecha, estado }) {
    const isYo = author === 'yo';
    const messageClass = isYo ? 'message yo-message' : 'message other-message';

    return (
        <div className={messageClass}>
            <div className="message-content">
                <p>{content}</p>
                <div className="message-footer">
                    <span className="message-time">{fecha}</span>
                    {isYo && (
                        <span className={`message-status ${estado}`}>
                            {estado === 'visto' ? '✓✓' : '✓'}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Mensaje;