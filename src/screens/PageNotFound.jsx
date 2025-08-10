import { TbError404 } from "react-icons/tb";
import HeroButton from "./Home/Components/HeroButton";
import { div } from "motion/react-client";
import { useDarkMode } from "./Home/hook/useDarkMode";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const { isDark } = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
        <div className="flex rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 p-[4px]">
          <div className="flex flex-col items-center rounded-lg bg-neutral-100 p-4 dark:bg-neutral-900">
            <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:text-left">
              <TbError404 className="h-20 w-20 text-red-500 sm:h-24 sm:w-24" />
              <h4 className="font-space-grotesk mt-2 text-2xl sm:mt-0 sm:ml-2 sm:text-3xl dark:text-neutral-100">
                Page Not Found! Please Try Again.
              </h4>
            </div>
            <HeroButton
              className="mt-4 cursor-pointer px-4 py-2 text-base sm:mt-2 sm:text-lg"
              onClick={() => navigate("/")}
            >
              Try Again!
            </HeroButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
