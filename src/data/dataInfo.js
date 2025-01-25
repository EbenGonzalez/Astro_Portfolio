const buttons1 = [
  {
    text: 'Nepe',
    iconButton: '/icons/css_old.svg',
    link: 'https://www.linkedin.com/in/ebendev/',
  },
  {
    text: 'Comprar Ahora',
    iconButton: '/icons/device-gamepad.svg',
    link: 'https://ebengonzalez.github.io/Super_Memory_Bros/',
  },
];

const cards = [
  {
    id: 'card-1',
    images: ['/images/1.png', '/images/2.png', '/images/3.png'],
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1 con detalles interesantes.',
    icons: ['/icons/html5.svg', '/icons/css_old.svg', '/icons/javascript.svg', '/icons/vscode.svg'],
    buttons: buttons1
  },
  {
    id: 'card-2',
    images: ['/images/4.png', '/images/5.png', '/images/6.png'],
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2, un enfoque diferente.',
    icons: ['/icons/html5.svg', '/icons/css_old.svg', '/icons/javascript.svg', '/icons/vscode.svg', '/icons/Express.js_light.svg', '/icons/mysql.svg',
      '/icons/postman.svg', '/icons/nodejs.svg', '/icons/git.svg', '/icons/sequelize.svg'],
    buttons: []
  },
  {
    id: 'card-3',
    images: ['/images/7.png', '/images/8.png'],
    title: 'Proyecto 3',
    description: 'Descripción del Proyecto 3 con un resumen atractivo.',
    icons: ['/icons/html5.svg', '/icons/css_old.svg', '/icons/javascript.svg', '/icons/html5.svg', '/icons/css_old.svg', '/icons/javascript.svg'],
    buttons: []
  },
];

const intro1= "Hola soy ebencito";
const intro2="Sin experiencia asi que mal vamos xD blablablablablablablablabla"

const experience=[
  {
    date: "Enero",
    title: "Ciclo",
    description: "blabla",
    link: ""
  },
  {
    date: "Febrero",
    title: "bootcamp",
    description: "bleble",
    link: ""
  },
  {
    date: "Marzo",
    title: "idiomas",
    description: "blibli",
    link: ""
  }
]

export { cards, intro1, intro2, experience }