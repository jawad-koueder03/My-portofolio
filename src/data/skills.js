// ============================================
// Skills Data — Skills Section (3 Groups)
// ============================================

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
  SiPostman,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiJsonwebtokens,
  SiPostgresql,
  SiVite
} from "@icons-pack/react-simple-icons";

export const skillsData = {
  frontend: {
    title: "Frontend",
    badge: "Core Skills",
    badgeVariant: "primary",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      {name : "Vite", icon: SiVite},
      {name:"Tailwind CSS", icon: SiTailwindcss}
    ],
  },

  tools: {
    title: "Tools & Workflow",
    badge: "Daily Use",
    badgeVariant: "success",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "API Integration", icon: SiPostman },
      { name: "Fetch", icon: SiJavascript },
      { name: "Responsive Design", icon: SiCss },
    ],
  },

  learning: {
    title: "Currently Learning",
    badge: "Exploring",
    badgeVariant: "warning",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Backend Development", icon: SiNodedotjs },
      { name: "REST APIs", icon: SiPostman },
      { name: "Authentication", icon: SiJsonwebtokens },
      { name: "Databases", icon: SiPostgresql },
      {name: "Next.js", icon: SiNextdotjs}
    ],
  },
};