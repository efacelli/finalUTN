import React from 'react';
import Chat from './Components/Mensajes/Chat';
import { DATA_MOOK, personas } from './data.js';
import { Routes, Route } from 'react-router-dom';
import Contactos from './Components/Contactos/Contactos.jsx';
import ContactInfo from './Components/ContactInfo/ContactInfo.jsx';


function App() {
	return (

		<Routes>
			<Route path="/" element={<Contactos personas={personas} />} />
			<Route path="/:id" element={<Chat personas={personas} />} />
			<Route path="/contact-info/:id" element={<ContactInfo personas={personas} />} />
		</Routes>

	);
}

export default App;