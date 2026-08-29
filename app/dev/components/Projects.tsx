import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import SectionNumber from "./SectionNumber";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <SectionNumber number="03" title="Projects" />

        <div className="mt-16 space-y-10">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}

        </div>
      </div>
    </section>
  );
}