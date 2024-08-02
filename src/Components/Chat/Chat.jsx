import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Mensaje from '../Mensajes/Mensaje';
import './Chat.css';

/**
 * Renderiza un componente de chat para una persona específica basada en su ID.
 *
 * @param {Object[]} personas - Un arreglo de objetos de persona.
 * @return {JSX.Element} El componente de chat para la persona especificada.
 */

const Chat = ({ personas }) => {
	const { id } = useParams();
	const persona = personas.find(p => p.id === parseInt(id));

	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');

	useEffect(() => {
		if (persona) {
			const storedMessages = localStorage.getItem(`chat_messages_${persona.id}`);
			if (storedMessages) {
				setMessages(JSON.parse(storedMessages));
			} else {
				setMessages(persona.mensajes);
			}
		}
	}, [persona]);

			/**
		 * Actualiza el estado newMessage con el valor del elemento de entrada.
		 *
		 * @param {Event} e - El objeto de evento que representa el evento de cambio de entrada.
		 * @return {void} Esta función no devuelve nada.
		 */

	const handleInputChange = (e) => {
		setNewMessage(e.target.value);
	};

		/**
	 * Maneja el evento de envío del formulario para el chat.
	 *
	 * @param {Event} e - El evento de envío del formulario.
	 * @return {void} Esta función no devuelve nada.
	 */
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if (newMessage.trim() !== '') {
			const now = new Date();
			const newMsg = {
				id: messages.length + 1,
				author: 'yo',
				content: newMessage,
				fecha: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
				estado: 'enviado'
			};
			const updatedMessages = [...messages, newMsg];
			setMessages(updatedMessages);
			localStorage.setItem(`chat_messages_${persona.id}`, JSON.stringify(updatedMessages));
			setNewMessage('');
		}
	};

	if (!persona) {
		return <div>Contacto no encontrado</div>;
	}

	return (
		<div className='chat-container'>
			<div className='chat-header'>
				<div className='header-left'>
					<Link to="/" className="back-arrow">
						<i className="fas fa-arrow-left"></i>
					</Link>
					<img src={persona.fotoPerfil} alt={persona.nombre} className='profile-pic' />
					<Link to={`/contact-info/${persona.id}`} className='contact-name'>{persona.nombre}</Link>
				</div>
				<div className='header-icons'>
					<i className="fas fa-video"></i>
					<i className="fas fa-phone"></i>
					<i className="fas fa-ellipsis-v"></i>
				</div>
			</div>
			<div className='chat-background'></div>
			<div className='messages-container'>
				{messages.map((mensaje) => (
					<Mensaje
						key={mensaje.id}
						author={mensaje.author}
						content={mensaje.content}
						fecha={mensaje.fecha}
						estado={mensaje.estado}
					/>
				))}
			</div>
			<form className='message-input-form' onSubmit={handleSubmit}>
				<input
					type="text"
					value={newMessage}
					onChange={handleInputChange}
					placeholder="Escribe un mensaje..."
					className='message-input'
				/>
				<button type="submit" className='send-button'>
					<i className="fas fa-paper-plane"></i>
				</button>
			</form>
		</div>
	);
};

export default Chat;