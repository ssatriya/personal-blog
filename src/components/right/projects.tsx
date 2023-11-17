import ProjectCard from "./project-card";
import ProjectCardMobile from "./project-card-mobile";

export default function Projects() {
  return (
    <div id="projects" className="w-full z-20">
      <h2 className="tracking-widest text-lg font-bold lg:hidden mb-8">
        Projects
      </h2>
      <div className="block lg:hidden">
        <ProjectCardMobile />
      </div>
      <div className="hidden lg:block">
        <ProjectCard />
      </div>
      <div>See all projects</div>
    </div>
  );
}
