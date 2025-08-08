import { RiCloseCircleLine } from "react-icons/ri";
import { AnimatedTooltip } from "./AnimatedTooltip";
function SingleProject({ currentProject, onClick, ref }) {
  return (
    <div className="fixed inset-0 z-10 flex h-full w-full items-center justify-center overflow-hidden bg-black/50 backdrop-blur-sm">
      <div
        ref={ref}
        className="mb-24 flex w-full max-w-[500px] flex-col items-start justify-start rounded-xl bg-white hover:shadow-lg hover:shadow-neutral-400/50 dark:bg-neutral-950"
      >
        <div className="relative">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="h-48 w-dvh rounded-xl object-fill sm:h-64"
          />
          <RiCloseCircleLine
            size={32}
            color="#000"
            className="absolute top-2 right-2 z-10 cursor-pointer"
            onClick={onClick}
          />
        </div>
        <div className="flex flex-grow flex-col px-3 pt-4 sm:px-4">
          <h3 className="font-space-grotesk text-2xl font-bold text-slate-800 dark:text-white">
            {currentProject.title}
          </h3>
          <p className="pt-2 text-xs text-slate-800 dark:text-neutral-400">
            {currentProject.info}
          </p>
        </div>
        <div className="mx-4 my-4 flex flex-wrap gap-2">
          <AnimatedTooltip items={currentProject.techStack} />
        </div>
        {/* <div className="my-4 mx-4 flex gap-1">
          {currentProject.techStack.map((tech) => (
            <div className="bg-white rounded-full flex items-center justify-center p-2">
              <img
                src={tech.src}
                alt={tech.name}
                className="h-8 w-8 object-fill"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default SingleProject;
