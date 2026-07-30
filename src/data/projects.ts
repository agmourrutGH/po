export type Project = {
  title: { en: string; es: string };
  desc: { en: string; es: string };
  bullets: { en: string; es: string }[];
  stack: string[];
  live?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    title: {
      en: "Nautical Management System",
      es: "Sistema de Gestión Náutica"
    },
    desc: {
      en: "Full stack web application for managing clients, vessels and services of a nautical business.",
      es: "Aplicación web full stack para la administración de clientes, embarcaciones y servicios de una náutica."
    },
    bullets: [
      { en: "REST API backend with Spring Boot", es: "Backend REST API con Spring Boot" },
      { en: "React frontend consuming APIs", es: "Frontend en React consumiendo APIs" },
      { en: "Client and vessel management", es: "Gestión de clientes y embarcaciones" },
      { en: "PostgreSQL persistence", es: "Persistencia con PostgreSQL" }
    ],
    stack: ["React", "Spring Boot", "PostgreSQL"],
    images: [
      "/images/sist-nautica/nautica-login.webp",
      "/images/sist-nautica/nautica-admin.webp",
      "/images/sist-nautica/nautica-admin-cliente.webp",
      "/images/sist-nautica/nautica-cliente.webp",
      "/images/sist-nautica/nautica-operario.webp"
    ]
  },
  {
    title: { en: "Brekky", es: "Brekky" },
    desc: {
      en: "Website for a café with modern design and focus on user experience.",
      es: "Sitio web para una cafetería con diseño moderno y enfoque en experiencia de usuario."
    },
    bullets: [
      { en: "Responsive web interface", es: "Interfaz web responsive" },
      { en: "Templates with Twig", es: "Templates con Twig" },
      { en: "Frontend with JavaScript and CSS", es: "Frontend con JavaScript y CSS" },
      { en: "MVC architecture with PHP", es: "Arquitectura MVC con PHP" }
    ],
    stack: ["PHP", "Twig", "JavaScript", "CSS"],
    images: [
      "/images/brekky/brekky-home.webp",
      "/images/brekky/brekky-menu.webp",
      "/images/brekky/brekky-galeria.webp"
    ]
  },
  {
  title: {
    en: "Pharmacy Queue Management System",
    es: "Sistema de Gestión de Turnos para Farmacia"
  },
  desc: {
    en: "Turn/queue management system for a pharmacy, with a public waiting-room display and a real-time admin panel.",
    es: "Sistema de gestión de turnos para una farmacia, con pantalla pública para la sala de espera y panel administrativo en tiempo real."
  },
  bullets: [
    { en: "Real-time turn calling via WebSockets (Socket.IO)", es: "Llamado de turnos en tiempo real vía WebSockets (Socket.IO)" },
    { en: "Separate public display for the waiting room TV", es: "Pantalla pública independiente para la TV de la sala de espera" },
    { en: "Admin panel with analytics: peak hours, cashier performance, Excel export", es: "Panel admin con estadísticas: pico de hora, rendimiento de cajas, exportación a Excel" },
    { en: "Desktop app built with Tauri + React", es: "Aplicación de escritorio construida con Tauri + React" }
  ],
  stack: ["Tauri", "React", "NestJS", "Prisma", "PostgreSQL", "Socket.IO"],
  images: [
    "/images/turnero-farmacia/farmacia-turno-tablet.png",
    "/images/turnero-farmacia/farmacia-gestion-turnos.png",
    "/images/turnero-farmacia/farmacia-reservaciones.png",
    "/images/turnero-farmacia/farmacia-panel-admin.png"
  ]
},
{
  title: {
    en: "Biotelek — Corporate & Sales Website",
    es: "Biotelek — Sitio Web Corporativo y de Ventas"
  },
  desc: {
    en: "Corporate website for Biotelek, exclusive Argentine distributor of Meditech Pharma robotic logistics solutions for pharmacies.",
    es: "Sitio web corporativo para Biotelek, distribuidor exclusivo en Argentina de soluciones de logística robótica Meditech Pharma para farmacias."
  },
  bullets: [
    { en: "Multi-language site (Spanish, English, Portuguese) with flag-based switcher", es: "Sitio multi-idioma (español, inglés y portugués) con selector por banderas" },
    { en: "Product showcase for the Meditech robotic equipment line", es: "Sección de productos con la línea de equipos robóticos Meditech" },
    { en: "Integrated WhatsApp contact button", es: "Botón de contacto integrado con WhatsApp" },
    { en: "Sections for company history, services and contact", es: "Secciones de historia de la empresa, servicios y contacto" }
  ],
  stack: ["HTML", "CSS", "JavaScript"],
  images: [
    "/images/biotelek-pag/pantalla-1.png",
    "/images/biotelek-pag/pantalla-2.png",
    "/images/biotelek-pag/pantalla-3.png"
  ]
}
];