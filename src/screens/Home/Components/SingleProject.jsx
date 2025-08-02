import { RiCloseCircleLine } from "react-icons/ri";
import { AnimatedTooltip } from "./AnimatedTooltip";
function SingleProject({ currentProject, onClick, ref }) {
  return (
    <div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
      <div
        ref={ref}
        className="w-sm mb-24 flex flex-col items-start justify-start hover:shadow-lg hover:shadow-neutral-400/50 rounded-xl bg-neutral-950"
      >
        <div className="relative">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="object-fill rounded-xl h-48 w-dvh"
          />
          <RiCloseCircleLine
            size={32}
            color="#000"
            className="absolute top-2 right-2 cursor-pointer z-10"
            onClick={onClick}
          />
        </div>
        <div className="flex flex-col flex-grow pt-4 mx-4">
          <h3 className=" text-white font-bold font-space-grotesk text-2xl">
            {currentProject.title}
          </h3>
          <p className="text-neutral-400 pt-2 text-xs ">
            {currentProject.info}
          </p>
        </div>
        <div className="my-4 mx-4 flex gap-1">
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
