const DATA_MOOK = [
    {
      author: 'pepe',
      content: 'Hola?',
      fecha: 'ayer a 15:34',
      estado: 'visto',
      id: 1
    },
    {
      author: 'yo',
      content: 'Sos real OMG',
      fecha: 'ayer a 15:35',
      estado: 'visto',
      id: 2
    },
    {
      author: 'pepe',
      content: 'Obviamente, acaso lo dudaste?',
      fecha: 'ayer a 15:36',
      estado: 'visto',
      id: 3
    },
    {
      author: 'yo',
      content: 'Jamas.',
      fecha: 'ayer a 15:37',
      estado: 'entregado',
      id: 4
    }
  ];

  const userData = {
    isLogged: true,
    isAdmin: true,
    lang: 'en'
  }

  const personas = [
    {
      id: 1,
      nombre: "Ana García",
      fotoPerfil: "https://emojitool.com/img/apple/ios-13.3/woman-type-1-2-3037.png",
      mensajes: [
        {
          id: 1,
          author: 'Ana García',
          content: '¡Hola! ¿Cómo estás?',
          fecha: '10:30',
          estado: 'enviado'
        },
        {
          id: 2,
          author: 'yo',
          content: 'Hola Ana, todo bien ¿y tú?',
          fecha: '10:35',
          estado: 'visto'
        }
      ]
    },
    {
      id: 2,
      nombre: "Lebron James",
      fotoPerfil: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      mensajes: [
        {
          id: 1,
          author: 'Lebron James',
          content: '¿Quedamos esta tarde para tomar un café?',
          fecha: '15:20',
          estado: 'enviado'
        },
        {
          id: 2,
          author: 'yo',
          content: 'Claro, ¿a las 5 en el café de siempre?',
          fecha: '15:25',
          estado: 'visto'
        }
      ]
    },
    {
      id: 3,
      nombre: "Fer",
      fotoPerfil: "https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/403311103_1410630246535363_361379544122436321_n.jpg?ccb=11-4&oh=01_Q5AaIHytmR8ttPEzTc_2yZ3Si355Di5EmWOZGUC0C-5M8HUJ&oe=66B0F0FB&_nc_sid=e6ed6c&_nc_cat=110",
      mensajes: [
        {
          id: 1,
          author: 'Fer',
          content: '¿Has terminado el informe para la reunión de mañana?',
          fecha: '09:00',
          estado: 'enviado'
        },
        {
          id: 2,
          author: 'yo',
          content: 'Casi, lo terminaré esta noche y te lo envío.',
          fecha: '09:05',
          estado: 'entregado'
        }
      ]
    }
  ];

  export { DATA_MOOK, userData, personas }