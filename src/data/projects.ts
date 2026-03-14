export type Project = {
  title: { en: string; es: string };
  desc: { en: string; es: string };
  bullets: { en: string; es: string }[];
  stack: string[];
  repo: string;
  live?: string;
  image: string;
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
    repo: "https://github.com/agmourrutGH",
    image: "/projects/nautica.png"
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
    repo: "https://github.com/agmourrutGH",
    image: "/projects/brekky.png"
  }
];
