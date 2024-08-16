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
      fotoPerfil: "https://ca-times.brightspotcdn.com/dims4/default/99f1c3a/2147483647/strip/true/crop/2000x1405+0+0/resize/1200x843!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc9%2Fa9%2F68435d41cf690e0c019e87278361%2F1f764b198a42470189b99b4084be6cf0",
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