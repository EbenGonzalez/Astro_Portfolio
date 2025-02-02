const contactInfo = [
  { text: "Github", icon: "/icons/Github_dark.svg", href: "https://github.com/EbenGonzalez", download: false },
  { text: "Email", icon: "/icons/gmail.svg", href: "mailto:ebencito88@gmail.com", download: false },
  { text: "LinkedIn", icon: "/icons/linkedin.svg", href: "https://linkedin.com/in/ebendev/", download: false },
  { text: "Curriculum", icon: "/icons/file-download.svg", href: "/docs/eben_gonzalez.pdf", download: true },
];

const footerInfo = [
  { text: "Github", icon: "/icons/Github_dark.svg", href: "https://github.com/EbenGonzalez", download: false },
  { text: "Email", icon: "/icons/gmail.svg", href: "mailto:ebencito88@gmail.com", download: false },
  { text: "LinkedIn", icon: "/icons/linkedin.svg", href: "https://linkedin.com/in/ebendev/", download: false },
  { text: "Whatsapp", icon: "/icons/whatsapp.svg", href: "https://wa.me/662308309", download: false },
  { text: "Telegram", icon: "/icons/telegram.svg", href: "https://t.me/Ebencitoo", download: false },
];

const navItems = [
  { text: "Inicio", icon: "/icons/home.svg", href: "#inicio" },
  { text: "Proyectos", icon: "/icons/code.svg", href: "#proyectos" },
  { text: "Estudios", icon: "/icons/notebook.svg", href: "#estudios" },
  { text: "Contacto", icon: "/icons/address-book.svg", href: "#contacto" },
];

const navItems2 = [
  { text: "", icon: "/icons/home.svg", href: "#inicio" },
  { text: "", icon: "/icons/notebook.svg", href: "#estudios" },
  { text: "", icon: "/icons/code.svg", href: "#proyectos" },
  { text: "", icon: "/icons/address-book.svg", href: "#contacto" },
];

const buttons1 = [
  {
    text: 'Repositorio',
    iconButton: '/icons/Github_light.svg',
    link: 'https://github.com/EbenGonzalez/Super_Memory_Bros',
  },
  {
    text: 'Pruebame',
    iconButton: '/icons/device-gamepad.svg',
    link: 'https://ebengonzalez.github.io/Super_Memory_Bros/',
  },
];

const buttons2 = [
  {
    text: 'Repositorio',
    iconButton: '/icons/Github_light.svg',
    link: 'https://github.com/EbenGonzalez/Project-2-Insulink',
  }
];

const buttons3 = [
  {
    text: 'Backend',
    iconButton: '/icons/Github_light.svg',
    link: 'https://github.com/EbenGonzalez/Project-WayHome-Backend',
  },
  {
    text: 'Frontend',
    iconButton: '/icons/Github_light.svg',
    link: 'https://github.com/EbenGonzalez/Project-WayHome-Frontend',
  },
];

const buttons4 = [
  {
    text: 'Repositorio',
    iconButton: '/icons/Github_light.svg',
    link: 'https://github.com/EbenGonzalez/Astro_Portfolio',
  }
];

const cards = [
  {
    id: 'card-1',
    images: ['/images/mario1.jpeg', '/images/mario2.jpg', '/images/mario3.jpg'],
    title: 'Super Memory Bros',
    description: 'Este fue mi primer proyecto en programación: un juego de memoria sencillo hecho con HTML, CSS y JavaScript. Por mi poca experiencia y conocimiento esta diseñado  pensando unicamente en pantallas de PC, por lo que no es responsive. Fue una experiencia muy útil para empezar a entender cómo funcionan las tecnologías básicas del desarrollo web.',
    icons: ['/icons/html5.svg', '/icons/css_old.svg', '/icons/javascript.svg', '/icons/vscode.svg'],
    buttons: buttons1
  },
  {
    id: 'card-2',
    images: ['/images/insulink1.jpg', '/images/insulink2.jpg', '/images/insulink3.jpg'],
    title: 'Insulink',
    description: 'Una pequeña API que, a partir de los informes generados por una bomba de insulina, proporciona información sobre las cantidades de hidratos de carbono e insulina consumidos, resistencia a la insulina y otras utilidades pensadas tanto para diabéticos como para sus cuidadores.',
    icons: ['/icons/html5.svg', '/icons/css_old.svg', '/icons/javascript.svg', '/icons/vscode.svg', '/icons/Express.js_light.svg', '/icons/mysql.svg',
      '/icons/postman.svg', '/icons/nodejs.svg', '/icons/git.svg', '/icons/sequelize.svg'],
    buttons: buttons2
  },
  {
    id: 'card-3',
    images: ['/images/wayhome1.jpg', '/images/wayhome2.jpg', '/images/wayhome3.jpg'],
    title: 'Way Home',
    description: 'Proyecto final del bootcamp, donde aplicamos todo lo aprendido para crear una web interactiva destinada a amantes de los animales. La plataforma facilita la interacción entre usuarios que buscan dar en adopción o ofrecer acogida temporal a sus mascotas.',
    icons: ['/icons/html5.svg', '/icons/css_old.svg', '/icons/javascript.svg', '/icons/vscode.svg', '/icons/Express.js_light.svg', '/icons/mysql.svg',
      '/icons/postman.svg', '/icons/nodejs.svg', '/icons/git.svg', '/icons/sequelize.svg', '/icons/react.svg', '/icons/materialui.svg'],
    buttons: buttons3
  },
  {
    id: 'card-4',
    images: ['/images/portfolio1.jpg', '/images/portfolio2.jpg', '/images/portfolio3.jpg'],
    title: 'Portfolio Personal',
    description: 'Mis primeros pasos añadiendo Astro y Tailwind para crear este pequeño portfolio personalizado. Está organizado por componentes y es muy sencillo de reutilizar como plantilla.',
    icons: ['/icons/html5.svg', '/icons/css_old.svg', '/icons/javascript.svg', '/icons/vscode.svg', '/icons/nodejs.svg', '/icons/tailwindcss.svg', '/icons/Astro_light.svg', '/icons/flowbite.svg'],
    buttons: buttons4
  }
];

const intro1 = "¡¡Hola!!";

const experience = [
  {
    date: "2024/2025",
    title: "Ciclo Superior Desarrollo de Aplicaciones Web",
    description: "He completado la formación teórica del Ciclo Superior en Desarrollo de Aplicaciones Web, quedando pendiente únicamente la fase de prácticas. Durante el curso, he desarrollado habilidades en análisis, diseño y desarrollo de aplicaciones, abordando tanto la parte funcional como la experiencia del usuario. También he trabajado en la implementación de soluciones web optimizadas, seguras y adaptadas a distintos entornos profesionales.",
    link: "/docs/eben_notas.pdf",
    textButton: "Notas"
  },
  {
    date: "2024",
    title: "Certificado Profesionalidad Nivel 3 Seguridad Informatica",
    description: "He completado el Certificado de Profesionalidad en Seguridad Informática (IFCT0109), con una duración de 500 horas. Durante la formación, he adquirido conocimientos en gestión de servicios informáticos, auditoría de seguridad, detección y respuesta ante incidentes, diseño de sistemas seguros y protección de equipos. Esta formación me ha preparado para identificar, mitigar y gestionar riesgos de seguridad en sistemas informáticos y redes, aplicando medidas preventivas y correctivas para garantizar la integridad y confidencialidad de la información.",
    link: "/docs/eben_seguridad.pdf",
    textButton: "Certificado"
  },
  {
    date: "2023",
    title: "Bootcamp Desarrollo Web Full Stack",
    description: "Mi primera incursion en este vasto mundo, he completado el Bootcamp Full-Stack Web & Mobile Development de Reboot Academy, con una duración de 300 horas. Durante esta formación intensiva, he trabajado en el desarrollo de aplicaciones web y móviles, abarcando tanto el frontend como el backend, además del diseño de interfaces y experiencia de usuario. A lo largo del curso, he adquirido habilidades en desarrollo de interfaces web, creación de servidores, bases de datos, API REST y despliegue de aplicaciones, además de metodologías ágiles, control de versiones y fundamentos de UX/UI. Esta formación me ha permitido desarrollar soluciones digitales completas, combinando funcionalidad, rendimiento y una óptima experiencia de usuario.",
    link: "/docs/eben_bootcamp.pdf",
    textButton: "Diploma"
  }
]

export { cards, intro1, experience, navItems,navItems2, contactInfo, footerInfo }