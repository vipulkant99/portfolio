import { AiOutlineTool } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { TbTool } from "react-icons/tb";
import { MovingCards } from "../Components/MovingCards";
import { TechStacks } from "../../../util/constants";
import { ScrollAnimation } from "../../ScrollAnimation";
import { useDarkMode } from "../hook/DarkModeContext";

function AboutSection() {
  const { isDark } = useDarkMode();

  return (
    <div
      id="about"
      className="relative flex min-h-screen flex-col overflow-hidden bg-white dark:bg-black"
    >
      <ScrollAnimation>
        <div className="mt-28 flex items-center justify-center gap-8 px-4 text-slate-800 sm:px-8 md:px-16 dark:text-slate-300">
          <BsPersonCircle size={64} color={isDark ? "white" : "black"} />
          <h1 className="font-space-grotesk text-6xl tracking-wide underline">
            About
          </h1>
        </div>
        <p className="font-inter mt-8 px-4 text-center text-slate-800 sm:px-12 md:px-20 dark:text-slate-300">
          Software Developer with 2+ years of experience building scalable
          cross-platform mobile applications using Flutter and Dart. Proficient
          in backend development with Node.js, REST API design, and cloud
          services including Firebase and Google Cloud Platform. Experienced in
          state management tools such as Provider and BLoC for mobile app
          development. Skilled in version control using Git, with strong
          problem-solving, communication, and teamwork skills. Passionate about
          integrating AI/ML technologies to deliver innovative software
          solutions.
        </p>
        <div
          id="skills"
          className="mx-16 mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-800 dark:text-slate-300"
        >
          <AiOutlineTool size={64} color={isDark ? "white" : "black"} />
          <h1 className="font-space-grotesk text-center text-6xl tracking-wide underline">
            Technical Skills
          </h1>
        </div>

        <div className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden rounded-md antialiased">
          <MovingCards items={TechStacks} direction="right" speed="medium" />
          <MovingCards items={TechStacks} direction="left" speed="medium" />
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default AboutSection;
