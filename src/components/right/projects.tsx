import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div id="projects" className="w-full z-20">
      <h2 className="tracking-widest text-lg font-bold lg:hidden mb-8">
        Projects
      </h2>
      <ProjectCard />
      <div>See all projects</div>
    </div>
  );
}
