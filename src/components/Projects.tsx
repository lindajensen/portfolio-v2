import { type ReactElement } from "react";
import projectsData from "../data/projectsData.json";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiFigma,
  SiSqlite,
  SiVuedotjs,
  SiExpress,
} from "react-icons/si";

function Projects() {
  type TechStack =
    | "HTML"
    | "CSS"
    | "JavaScript"
    | "React"
    | "TypeScript"
    | "PostgreSQL"
    | "SQLite"
    | "Express"
    | "Vue"
    | "Figma";

  function getTechIcon(tech: TechStack): ReactElement {
    const iconClass = "tech-icon";

    const iconMap: Record<TechStack, ReactElement> = {
      HTML: <SiHtml5 className={iconClass} />,
      CSS: <SiCss3 className={iconClass} />,
      JavaScript: <SiJavascript className={iconClass} />,
      React: <SiReact className={iconClass} />,
      TypeScript: <SiTypescript className={iconClass} />,
      PostgreSQL: <SiPostgresql className={iconClass} />,
      SQLite: <SiSqlite className={iconClass} />,
      Express: <SiExpress className={iconClass} />,
      Vue: <SiVuedotjs className={iconClass} />,
      Figma: <SiFigma className={iconClass} />,
    };

    return iconMap[tech] || <SiJavascript className={iconClass} />;
  }

  return (
    <section className="projects">
      <h2 className="projects__title" id="projects">
        Recent <span className="projects--highlight">Projects</span>
      </h2>

      <div className="projects__list">
        {projectsData.map((project) => (
          <article className="projects__item" key={project.id}>
            <img
              className="projects__image"
              src={project.image}
              alt={project.name}
            />
            <h3 className="projects__name">{project.name}</h3>
            <p className="projects__description">{project.description}</p>

            <div className="projects__tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="projects__tech-item" title={tech}>
                  {getTechIcon(tech as TechStack)}
                  <span className="projects__tech-name">{tech}</span>
                </span>
              ))}
            </div>

            <div className="projects__buttons">
              {project.liveUrl && (
                <a
                  className="projects__button"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
              )}

              {project.githubUrl && (
                <a
                  className="projects__button"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}

              {!project.liveUrl && !project.githubUrl && (
                <p className="fallback-message">Code and preview unavailable</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
