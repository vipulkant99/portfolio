import { FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

function UpworkButton() {
  return (
    <a
      href="https://www.upwork.com/freelancers/~016f063fc2fc12fedc"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group mt-4 flex w-full items-start justify-start rounded-xl border border-neutral-600 px-2 py-3 transition duration-300 transform-3d hover:scale-101 hover:shadow-lg hover:shadow-green-500/50 md:w-3/4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-green-500/50 p-1.5">
              <FaUpwork size={56} color="white" />
            </div>
            <div>
              <h4 className="font-inter ml-4 text-lg font-semibold text-slate-800 dark:text-neutral-200">
                Upwork
              </h4>
              <p className="font-inter mb-2 ml-4 text-neutral-400">
                Vipul Kant C.
              </p>
            </div>
          </div>
          <HiArrowRight size={24} color="#fff" />
        </div>
      </div>
    </a>
  );
}

export default UpworkButton;
