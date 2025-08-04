import { HiArrowRight } from "react-icons/hi2";

function LinkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/vipul-99/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group border border-neutral-600 rounded-xl w-3/4 px-2 py-3 mt-12 flex items-start justify-start hover:shadow-lg hover:shadow-cyan-300/50 transform-3d transition duration-300 hover:scale-101">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center">
            <img
              src="/socials/linkedin.svg"
              alt="linkedin"
              className="h-12 w-12 object-contain rounded-full ml-2 cursor-pointer"
            />
            <div>
              <h4 className="text-neutral-200 font-semibold font-inter text-lg ml-4">
                Linkedin
              </h4>
              <p className="text-neutral-400 mb-2 font-inter ml-4">
                in/vipul-99
              </p>
            </div>
          </div>
          <HiArrowRight size={24} color="#fff" />
        </div>
      </div>
    </a>
  );
}

export default LinkedinButton;
