import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";
import { useDarkMode } from "../hook/useDarkMode";

function ResumeButton() {
  const { isDark } = useDarkMode();

  return (
    <a
      href="https://drive.google.com/file/d/1P81uLlYohNEHERYm8j6pZRq9-qubouHu/view"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group mt-4 flex w-full items-start justify-start rounded-xl border border-neutral-600 px-2 py-3 transition duration-300 transform-3d hover:scale-101 hover:shadow-lg hover:shadow-gray-400 md:w-3/4 dark:hover:shadow-gray-400/50">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border p-1.5 ${isDark ? "bg-white" : "bg-black"}`}
            >
              <IoNewspaperOutline
                size={56}
                color={isDark ? "black" : "white"}
              />
            </div>
            <div>
              <h4 className="font-inter ml-4 text-lg font-semibold text-slate-800 dark:text-neutral-200">
                Resume
              </h4>
            </div>
          </div>
          <HiArrowRight size={24} color="#fff" />
        </div>
      </div>
    </a>
  );
}

export default ResumeButton;
