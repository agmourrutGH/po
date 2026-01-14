export type Project = {
  title: string;
  desc: string;
  bullets: string[];
  stack: string[];
  repo: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Nautica IES — Frontend (trabajo en equipo)",
    desc: "Sistema de gestión web desarrollado en equipo, con enfoque en UI clara, consumo de API y estructura mantenible.",
    bullets: [
      "Implementación de vistas y componentes reutilizables",
      "Consumo de endpoints y manejo de estado en la UI",
      "Trabajo colaborativo con Git y división de tareas",
    ],
    stack: ["React", "TypeScript/JS", "CSS/Tailwind", "Git/GitHub"],
    repo: "https://github.com/latorresGH/nautica-ies-frontend",
  },
  {
    title: "Brekky — Proyecto personal",
    desc: "Proyecto individual para practicar arquitectura frontend, componentes y lógica de aplicación.",
    bullets: [
      "Desarrollo end-to-end del proyecto",
      "Estructura por componentes y reutilización",
      "Iteración continua: mejoras y refactors",
    ],
    stack: ["(Completá stack real)"],
    repo: "https://github.com/agmourrutGH/brekky",
  },
];
