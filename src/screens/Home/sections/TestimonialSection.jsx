import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { ScrollAnimation } from "../../ScrollAnimation";
import { testimonialData } from "../../../util/constants";
import { useDarkMode } from "../hook/DarkModeContext";

function TestimonialSection() {
  const { isDark } = useDarkMode();

  return (
    <div
      id="testimonial"
      className="relative flex flex-col overflow-hidden bg-white dark:bg-black"
    >
      <ScrollAnimation>
        <div className="mx-16 mt-28 flex items-center justify-center gap-8 text-slate-300">
          <HiOutlineChatBubbleLeftRight
            size={64}
            color={isDark ? "white" : "black"}
          />
          <h1 className="font-space-grotesk text-6xl tracking-wide text-slate-800 underline dark:text-slate-300">
            Testimonials
          </h1>
        </div>
        <div className="mt-16 mb-12 grid grid-cols-3 gap-2">
          {testimonialData.map((data) => (
            <div className="group mx-8 my-6 flex w-md flex-col items-start justify-start hover:rounded-xl hover:shadow-md hover:shadow-neutral-800/50 dark:hover:shadow-neutral-400/50">
              <h4 className="font-inter text-md font-light text-slate-800 group-hover:ml-4 dark:text-white">
                {data.info}
              </h4>
              <div className="mt-auto flex items-start pt-4 group-hover:ml-4">
                <img
                  src={data.img}
                  alt={data.name}
                  className="h-14 w-14 rounded-full object-contain"
                />
                <div className="flex w-auto flex-grow flex-col items-start justify-center">
                  <div className="flex items-center justify-between">
                    <h3 className="font-space-grotesk ml-4 text-2xl font-bold text-slate-800 dark:text-white">
                      {data.name}
                    </h3>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/socials/linkedin.svg"
                        alt={data.name}
                        className="ml-2 h-8 w-8 cursor-pointer rounded-full object-contain"
                      />
                    </a>
                  </div>
                  <p className="text-md font-inter ml-4 pt-1 text-neutral-400 group-hover:mb-4">
                    {data.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default TestimonialSection;
