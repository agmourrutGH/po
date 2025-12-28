export type Project = {
  title: string;
  desc: string;
  stack: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Proyecto 1",
    desc: "Qué problema resuelve y qué hiciste vos (1-2 líneas).",
    stack: ["Astro", "Tailwind", "Vercel"],
    live: "https://TU-DEPLOY.vercel.app",
    repo: "https://github.com/agmourrutGH/TU-REPO",
  },
  {
    title: "Proyecto 2",
    desc: "Descripción corta con impacto (no genérica).",
    stack: ["React", "Node"],
    live: "#",
    repo: "#",
  },
];
