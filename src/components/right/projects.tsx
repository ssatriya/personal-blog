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
      <button className="mt-4 transition-all hover:bg-background/20 text-white/80 px-4 py-[2px] rounded-sm text-sm backdrop-filter backdrop-blur-sm">
        See all projects
      </button>
    </div>
  );
}
