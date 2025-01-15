import { ProjectCard } from "@/components/sub/project-card";
import { RESOURCES } from "@/constants";

export const Resources = () => {
  return (
    <section
      id="resources"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Resources
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {RESOURCES.map((resource) => (
          <ProjectCard
            key={resource.title}
            src={resource.image}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </section>
  );
};
