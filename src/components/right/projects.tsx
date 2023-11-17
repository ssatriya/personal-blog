import { useMediaQuery } from "@uidotdev/usehooks";
import ProjectCard from "./project-card";
import ProjectCardMobile from "./project-card-mobile";

export default function Projects() {
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");

  return (
    <div id="projects" className="w-full z-20">
      <h2 className="tracking-widest text-lg font-bold lg:hidden mb-8">
        Projects
      </h2>
      {isMobile ? <ProjectCardMobile /> : <ProjectCard />}
      <div>See all projects</div>
    </div>
  );
}
