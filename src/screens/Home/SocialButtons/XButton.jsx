import { FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

function XButton() {
  return (
    <a
      href="https://x.com/vipulkant99"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group mt-4 flex w-full items-start justify-start rounded-xl border border-neutral-600 px-2 py-3 transition duration-300 transform-3d hover:scale-101 hover:shadow-lg hover:shadow-neutral-900 md:w-3/4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                src="/socials/x.svg"
                alt="X"
                className="ml-2 h-12 w-12 cursor-pointer rounded-full object-contain"
              />
            </div>
            <div>
              <h4 className="font-inter ml-4 text-lg font-semibold text-slate-800 dark:text-neutral-200">
                X
              </h4>
              <p className="font-inter mb-2 ml-4 text-neutral-400">
                @vipulkant99
              </p>
            </div>
          </div>
          <HiArrowRight size={24} color="#fff" />
        </div>
      </div>
    </a>
  );
}

export default XButton;
