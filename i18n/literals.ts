export const literals = {
  es: {
    header: {
      brand: "ALBERT_DEV",
      aboutMe: "Sobre mi",
      experience: "Experiencia",
      projects: "Proyectos",
      openMenu: "Abrir menu",
      closeMenu: "Cerrar menu",
    },
    languageSwitcher: {
      ariaLabel: "Cambiar idioma",
      spanish: "Español",
      english: "Inglés",
    },
    hero: {
      badge: "FULLSTACK_DEVELOPER",
      title: "Albert Castiñeira",
      description:
        "Desarrollador Full Stack con más de 3 años de experiencia, ubicado en Barcelona, España.",
      imageAlt: "Foto de perfil de Albert Castiñeira",
      button: "CONTACTAME",
      contactEmail: "albertcastiaran@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/albert-casti%C3%B1eira-aranda/",
      githubUrl: "https://github.com/albertcastineira",
      decoTopRight: [
        "PORTFOLIO VERSION 1.0",
        "CURRENT STATUS: DEPLOYED",
        "MODULE: 432AB32_20",
      ],
      decoBottomLeft: [
        "CURRENT_MODE: INFORMATION DISPLAY",
        "CURRENT_USER: ALBERT",
      ],
    },
    aboutMeSection: {
      sectionLabel: "SECCION 01",
      title: "SOBRE_MI",
      description:
        "Soy desarrollador Full Stack con una base solida en frontend y backend, enfocado en crear productos web escalables, claros y mantenibles. Me interesa especialmente construir interfaces cuidadas, rendimiento real en produccion y arquitecturas que permitan evolucionar rapido sin perder calidad tecnica.",
      blocks: [
        {
          title: "SKILLS",
          items: [
            "Codigo limpio",
            "Desarrollo UI",
            "APIs REST",
            "Testing",
            "Rendimiento",
            "Responsive Design",
            "Metodologias agiles",
            "Resolucion de problemas",
            "Pensamiento critico",
          ],
        },
        {
          title: "LENGUAJES_DE_PROGRAMACION",
          items: [
            "JavaScript",
            "TypeScript",
            "Ruby",
            "SQL",
            "HTML",
            "CSS",
            "Python",
            "Java",
          ],
        },
        {
          title: "FRAMEWORKS",
          items: [
            "React",
            "Next.js",
            "Ruby on Rails",
            "Tailwind CSS",
            "Material UI",
            "Bootstrap",
            "Vite",
            "ShadCN",
            "Spring Boot",
          ],
        },
        {
          title: "HERRAMIENTAS_&_IDE",
          items: [
            "VS Code",
            "Git",
            "GitHub",
            "Postman",
            "Figma",
            "Jira",
            "Rally",
            "Confluence",
            "Slack",
          ],
        },
      ],
    },
    experience: {
      sectionLabel: "SECCION 02",
      title: "EXPERIENCIA_LABORAL",
      currentJobLabel: "TRABAJO_ACTUAL",
      jobs: [
        {
          period: "Mayo 2024 - Actualidad",
          role: "Desarrollador de Software",
          company: "SopraSteria",
          description:
            "Desarrollo de múltiples aplicaciones en React. Creación y mantenimiento de Single Page Applications usando como base ReactJS. Uso de herramientas y frameworks internos para el desarrollo de aplicaciones bancarias. Desarrollo e implementación de un flujo frontend para la realización de transferencias bancarias, guiado por un panel de pasos intuitivo adaptado a la experiencia del usuario. Creacion de test unitarios y de integracion con Jest y React Testing Library.",
        },
        {
          period: "Enero 2023 - Marzo 2023",
          role: "Desarrollador de Software",
          company: "b2brouter",
          description:
            "Desarrollo de una plataforma de facturacion con Ruby on Rails, Tailwind-CSS y PostgreSQL. Lleve a cabo parte de la renovacion del frontend. Implementacion y desarrollo de un sistema de certificados digitales para las facturas, incluyendo sus correspondientes test. En backend realizaba pruebas y validaciones de facturas.",
        },
        {
          period: "Enero 2021 - Diciembre 2022",
          role: "Desarrollador de Software",
          company: "Databot Technologies",
          description:
            "Desarrollo de varias plataformas de gestion de objetos personalizadas para cada cliente. El stack utilizado fue: Ruby on Rails, Bootstrap, Tailwind CSS, React, Vanilla JS, CSS y MySQL. Creacion de landing pages pixel perfect para diversos clientes internacionales. Configuracion de un motor de busqueda SOLR.",
        },
      ],
    },
    projects: {
      sectionLabel: "SECCION 03",
      title: "PROYECTOS",
      description:
        "Una seleccion de productos y experimentos que he disenado y desarrollado, desde aplicaciones completas hasta pruebas enfocadas en tecnologia, UX y rendimiento.",
      featuredLabel: "PROYECTO_DESTACADO",
      liveLabel: "VER_PROYECTO",
      sourceLabel: "VER_CODIGO",
      items: [
        {
          title: "Albert Casti Portfolio",
          description:
            "Este portfolio personal ha sido disenado y programado por mi desde 0, definiendo arquitectura, UI, experiencia responsive y sistema de internacionalizacion completo.",
          technologies: ["Next.js", "TypeScript", "TailwindCSS", "Figma"],
          githubUrl:
            "https://github.com/albertcastineira/albert-casti-portfolio",
        },
        {
          title: "BrowserHub",
          description:
            "Una version moderna y mas estable de BrowserHub. Permite crear, editar y eliminar categorias y sitios desde un panel, ademas de incluir una amplia personalizacion visual.",
          technologies: ["ReactJS", "MaterialUI", "Figma"],
          liveUrl: "https://browserhub.vercel.app/",
        },
        {
          title: "ANT Storage",
          description:
            "Aplicacion de gestion de inventario para almacenes, enfocada en accesibilidad y velocidad. Fue desarrollada en 4 semanas por un equipo de 3 personas, cubriendo frontend y backend.",
          technologies: [
            "Java",
            "SpringBoot",
            "ReactJS",
            "TailwindCSS",
            "Figma",
            "MySQL",
          ],
          githubUrl: "https://github.com/ANT-Storage/react-ant-storage/",
        },
        {
          title: "Vue Reading List",
          description:
            "Un proyecto pequeno para aprender las bases de Vue y el uso de local storage. Es una lista de lectura responsive con filtros de busqueda.",
          technologies: ["VueJs", "TailwindCSS"],
          liveUrl: "https://vue-reading-list.vercel.app/",
        },
        {
          title: "BrowserHub Beta",
          description:
            "Una primera version centrada en resolver el problema de acumular demasiados marcadores en el navegador y perder tiempo buscandolos.",
          technologies: ["ReactJS", "TailwindCSS", "Figma"],
          liveUrl: "https://albertcastineira.github.io/react-browserhub/",
        },
        {
          title: "Lunaris Live Demo",
          description:
            "Demo en vivo del proyecto Lunaris, enfocada en una experiencia moderna, visual y fluida en navegacion y presentacion.",
          technologies: ["ReactJS", "TailwindCSS", "Figma"],
          liveUrl: "https://lunaris-live-demo.vercel.app/",
        },
      ],
    },
    footer: {
      copyright: "© 2026 Albert Castiñeira. All rights reserved",
      linkedinUrl: "https://www.linkedin.com/in/albert-casti%C3%B1eira-aranda/",
      githubUrl: "https://github.com/albertcastineira",
      linkedinAriaLabel: "LinkedIn",
      githubAriaLabel: "GitHub",
    },
  },
  en: {
    header: {
      brand: "ALBERT_DEV",
      aboutMe: "About me",
      experience: "Experience",
      projects: "Projects",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    languageSwitcher: {
      ariaLabel: "Change language",
      spanish: "Spanish",
      english: "English",
    },
    hero: {
      badge: "FULLSTACK_DEVELOPER",
      title: "Albert Castiñeira",
      description:
        "Full Stack Developer with more than 3 years of experience, based in Barcelona, Spain.",
      imageAlt: "Profile photo of Albert Castiñeira",
      button: "CONTACT_ME",
      contactEmail: "albertcastiaran@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/albert-casti%C3%B1eira-aranda/",
      githubUrl: "https://github.com/albertcastineira",
      decoTopRight: [
        "PORTFOLIO VERSION 1.0",
        "CURRENT STATUS: DEPLOYED",
        "MODULE: 432AB32_20",
      ],
      decoBottomLeft: [
        "CURRENT_MODE: INFORMATION DISPLAY",
        "CURRENT_USER: ALBERT",
      ],
    },
    aboutMeSection: {
      sectionLabel: "SECTION 01",
      title: "ABOUT_ME",
      description:
        "I am a Full Stack developer with a solid frontend and backend background, focused on building scalable, clean and maintainable web products. I am especially interested in crafting polished interfaces, real production performance and architectures that allow fast iteration without losing technical quality.",
      blocks: [
        {
          title: "SKILLS",
          items: [
            "Clean Code",
            "UI Development",
            "REST APIs",
            "Testing",
            "Performance",
            "Responsive Design",
            "Agile Methodologies",
            "Problem Solving",
            "Critical Thinking",
          ],
        },
        {
          title: "PROGRAMING_LANGUAGES",
          items: [
            "JavaScript",
            "TypeScript",
            "Ruby",
            "SQL",
            "HTML",
            "CSS",
            "Python",
            "Java",
          ],
        },
        {
          title: "FRAMEWORKS",
          items: [
            "React",
            "Next.js",
            "Ruby on Rails",
            "Tailwind CSS",
            "Material UI",
            "Bootstrap",
            "Vite",
            "ShadCN",
            "Spring Boot",
          ],
        },
        {
          title: "TOOLS_&_IDE",
          items: [
            "VS Code",
            "Git",
            "GitHub",
            "Postman",
            "Figma",
            "Jira",
            "Rally",
            "Confluence",
            "Slack",
          ],
        },
      ],
    },
    experience: {
      sectionLabel: "SECTION 02",
      title: "WORKING_EXPERIENCE",
      currentJobLabel: "CURRENT_JOB",
      jobs: [
        {
          period: "May 2024 - Present",
          role: "Software Developer",
          company: "SopraSteria",
          description:
            "Development of multiple applications in React. Creation and maintenance of Single Page Applications using ReactJS as a base. Use of internal tools and frameworks for the development of banking applications. Development and implementation of a frontend flow for performing bank transfers, guided by an intuitive step-by-step panel tailored to the user experience. Creation of unit and integration tests with Jest and React Testing Library.",
        },
        {
          period: "January 2023 - March 2023",
          role: "Software Developer",
          company: "b2brouter",
          description:
            "Development of a billing platform with Ruby on Rails, Tailwind-CSS, PostgreSQL. I was carrying out part of the frontend renovation. Implementation and development of a digital certificate system for invoices, including their corresponding tests. In backend I was performing tests and validations of invoices.",
        },
        {
          period: "January 2021 - December 2022",
          role: "Software Developer",
          company: "Databot Technologies",
          description:
            "Development of several object management platforms customized for each client. The tech stack was: Ruby on Rails, Bootstrap, Tailwind CSS, React, Vanilla Js, CSS, MySQL. Creation of pixel perfect landing pages for various international clients. Configuration of a SOLR search engine.",
        },
      ],
    },
    projects: {
      sectionLabel: "SECTION 03",
      title: "PROJECTS",
      description:
        "A selection of products and experiments I have designed and built, from complete applications to smaller explorations focused on technology, UX and performance.",
      featuredLabel: "FEATURED_PROJECT",
      liveLabel: "VIEW_PROJECT",
      sourceLabel: "VIEW_SOURCE",
      items: [
        {
          title: "Albert Casti Portfolio",
          description:
            "This personal portfolio was designed and developed by me from scratch, defining architecture, UI, responsive experience and a complete internationalization system.",
          technologies: ["Next.js", "TypeScript", "TailwindCSS", "Figma"],
          githubUrl:
            "https://github.com/albertcastineira/albert-casti-portfolio",
        },
        {
          title: "BrowserHub",
          description:
            "A new modern and more stable version of BrowserHub. It lets you create, edit and remove categories and websites from the panel, while also including broad theme customization.",
          technologies: ["ReactJS", "MaterialUI", "Figma"],
          liveUrl: "https://browserhub.vercel.app/",
        },
        {
          title: "ANT Storage",
          description:
            "An inventory management application designed for warehouses in any business, with a focus on accessibility and speed. It was developed in 4 weeks by a 3-member group, covering both frontend and backend.",
          technologies: [
            "Java",
            "SpringBoot",
            "ReactJS",
            "TailwindCSS",
            "Figma",
            "MySQL",
          ],
          githubUrl: "https://github.com/ANT-Storage/react-ant-storage/",
        },
        {
          title: "Vue Reading List",
          description:
            "A small project to learn the basics of Vue and the use of local storage. It is a responsive reading list with search filters.",
          technologies: ["VueJs", "TailwindCSS"],
          liveUrl: "https://vue-reading-list.vercel.app/",
        },
        {
          title: "BrowserHub Beta",
          description:
            "An early version focused on solving the problem of having too many browser bookmarks and wasting time searching through them.",
          technologies: ["ReactJS", "TailwindCSS", "Figma"],
          liveUrl: "https://albertcastineira.github.io/react-browserhub/",
        },
        {
          title: "Lunaris Live Demo",
          description:
            "Live demo of the Lunaris project, focused on a modern visual experience and smooth navigation and presentation.",
          technologies: ["ReactJS", "TailwindCSS", "Figma"],
          liveUrl: "https://lunaris-live-demo.vercel.app/",
        },
      ],
    },
    footer: {
      copyright: "© 2026 Albert Castiñeira. All rights reserved",
      linkedinUrl: "https://www.linkedin.com/in/albert-casti%C3%B1eira-aranda/",
      githubUrl: "https://github.com/albertcastineira",
      linkedinAriaLabel: "LinkedIn",
      githubAriaLabel: "GitHub",
    },
  },
} as const;

const aboutBlocksReference = literals.en.aboutMeSection.blocks;
const projectsReference = literals.en.projects.items;

for (const locale of Object.keys(literals) as AppLocale[]) {
  const blocks = literals[locale].aboutMeSection.blocks;

  if (blocks.length !== aboutBlocksReference.length) {
    throw new Error(`Invalid aboutMeSection block count for locale: ${locale}`);
  }

  blocks.forEach((block, index) => {
    const referenceBlock = aboutBlocksReference[index];

    if (block.items.length !== referenceBlock.items.length) {
      throw new Error(
        `Invalid aboutMeSection item count for locale ${locale} in block ${block.title}`,
      );
    }
  });
}

for (const locale of Object.keys(literals) as AppLocale[]) {
  const projects = literals[locale].projects.items;

  if (projects.length !== projectsReference.length) {
    throw new Error(`Invalid projects item count for locale: ${locale}`);
  }

  projects.forEach((project, index) => {
    const referenceProject = projectsReference[index];

    if (project.technologies.length !== referenceProject.technologies.length) {
      throw new Error(
        `Invalid projects technology count for locale ${locale} in project ${project.title}`,
      );
    }
  });
}

export type AppLocale = keyof typeof literals;

export function isAppLocale(value: string): value is AppLocale {
  return value === "es" || value === "en";
}

export type HeaderLiterals = (typeof literals)[AppLocale]["header"];
export type LanguageSwitcherLiterals =
  (typeof literals)[AppLocale]["languageSwitcher"];
export type HeroLiterals = (typeof literals)[AppLocale]["hero"];
export type AboutMeLiterals = (typeof literals)[AppLocale]["aboutMeSection"];
export type ExperienceLiterals = (typeof literals)[AppLocale]["experience"];
export type ProjectsLiterals = (typeof literals)[AppLocale]["projects"];
export type FooterLiterals = (typeof literals)[AppLocale]["footer"];
