import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

function GithubButton() {
  return (
    <a
      href="https://github.com/vipulkant99"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group mt-4 flex w-3/4 items-start justify-start rounded-xl border border-neutral-600 px-2 py-3 transition duration-300 transform-3d hover:scale-101 hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-400/50">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-gray-400/50 p-1.5">
              <FaGithub size={56} />
            </div>
            <div>
              <h4 className="font-inter ml-4 text-lg font-semibold text-slate-800 dark:text-neutral-200">
                Github
              </h4>
              <p className="font-inter mb-2 ml-4 text-neutral-400">
                vipulkant99
              </p>
            </div>
          </div>
          <HiArrowRight size={24} color="#fff" />
        </div>
      </div>
    </a>
  );
}

export default GithubButton;
