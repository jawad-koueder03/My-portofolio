
import project1 from "../assets/images/projects/project-1.PNG";
import project2 from "../assets/images/projects/project-2.PNG";
 import project3 from "../assets/images/projects/project-3.PNG";

export const projectsData = [
  {
    id: 1,
    title: "Project One",
    type: "Web Application",
    description:
      "web application that allows the employees to contact each other in the syrian Ministry of Interior and it's work only on pc (not responsive) ",
    image: project1,
    technologies: ["React", "CSS", "API","tailwind","web socket"],
    liveDemo: "https://jawad-koueder03.github.io/project-1ForMyCv",
    github: "https://github.com/jawad-koueder03/project-1ForMyCv",
  },
  {
    id: 2,
    title: "Project Two",
    type: "E-Commerce",
    description:
      "an E-commerce website for selling products online , user-friendly interface , also i used React ,tailwind ,react router , and react simple .",
    image: project2,
    technologies: ["React", "Fetch API", "CSS" , "React","tailwind","react router","react simple"],
    liveDemo: "https://jawad-koueder03.github.io/E-commerce/",
    github: "https://github.com/jawad-koueder03/E-commerce",
  },
  {
    id: 3,
    title: "on progress project",
    type: "on progress",
    description:" on progress project that i will work on it in the future"
    ,    image: project3,
    technologies: [],
    liveDemo: "#",
    github: "#",
  },
];