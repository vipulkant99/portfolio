import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

function GithubButton() {
  return (
    <a
      href="https://github.com/vipulkant99"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group border border-neutral-600 rounded-xl w-3/4 px-2 py-3 mt-8 flex items-start justify-start hover:shadow-lg hover:shadow-gray-400/50 transform-3d transition duration-300 hover:scale-101">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center">
            <div className="p-1.5 bg-gray-400/50 border  rounded-full w-12 h-12 flex items-center justify-center">
              <FaGithub size={56} />
              {/* <img
                src="/socials/github.svg"
                alt="github"
                className="h-12 w-12 object-contain rounded-full ml-2"
              /> */}
            </div>
            <div>
              <h4 className="text-neutral-200 font-semibold font-inter text-lg ml-4">
                Github
              </h4>
              <p className="text-neutral-400 mb-2 font-inter ml-4">
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
