import { HiArrowRight } from "react-icons/hi2";

function RedditButton() {
  return (
    <a
      href="https://www.reddit.com/user/MrStark-_-7/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group mt-4 flex w-3/4 items-start justify-start rounded-xl border border-neutral-600 px-2 py-3 transition duration-300 transform-3d hover:scale-101 hover:shadow-lg hover:shadow-orange-500/50">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center">
            <img
              src="/socials/reddit.svg"
              alt="linkedin"
              className="ml-2 h-12 w-12 cursor-pointer rounded-full object-contain"
            />
            <div>
              <h4 className="font-inter ml-4 text-lg font-semibold text-slate-800 dark:text-neutral-200">
                Reddit
              </h4>
              <p className="font-inter mb-2 ml-4 text-neutral-400">
                u/MrStark-_-7
              </p>
            </div>
          </div>
          <HiArrowRight size={24} color="#fff" />
        </div>
      </div>
    </a>
  );
}

export default RedditButton;
