import React from 'react';
import './Mensaje.css';

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