import { HiOutlineMail } from "react-icons/hi";
import { ScrollAnimation } from "../../ScrollAnimation";
import FormPart from "../Components/FormPart";
import LinkedinButton from "../SocialButtons/LinkedinButton";
import GithubButton from "../SocialButtons/GithubButton";
import RedditButton from "../SocialButtons/RedditButton";
import DiscordButton from "../SocialButtons/DiscordButton";
import UpworkButton from "../SocialButtons/UpworkButton";
import { useDarkMode } from "../hook/DarkModeContext";
import ResumeButton from "../SocialButtons/ResumeButton";
import GoogleButton from "../SocialButtons/GoogleButton";

function ContactSection() {
  const { isDark } = useDarkMode();

  return (
    <div
      id="testimonial"
      className="relative flex flex-col overflow-hidden bg-white dark:bg-black"
    >
      <ScrollAnimation>
        <div className="mx-4 mt-16 flex flex-col items-center justify-center gap-4 text-slate-300 md:mx-16 md:flex-row md:gap-8">
          <HiOutlineMail
            size={48}
            className="md:size-[64px]"
            color={isDark ? "white" : "black"}
          />
          <h1 className="font-space-grotesk text-6xl tracking-wide text-slate-800 underline dark:text-slate-300">
            Contact
          </h1>
        </div>
        <div className="mt-16 mb-12 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1px_1fr]">
          <FormPart />
          <div className="hidden h-full w-[1px] bg-gradient-to-b from-neutral-900 via-cyan-400 to-neutral-900 md:block"></div>
          <div className="block h-[1px] w-full bg-gradient-to-r from-neutral-900 via-cyan-400 to-neutral-900 md:hidden"></div>
          <div className="mr-4 ml-4 md:ml-16">
            <p className="w-full text-lg tracking-tight text-slate-800 md:w-3/4 md:text-xl dark:text-neutral-400">
              I’m open to exciting new opportunities. Got a question or just
              want to connect? Feel free to click that button and reach out!
            </p>
            <LinkedinButton />
            <GithubButton />
            <RedditButton />
            <DiscordButton />
            <GoogleButton />
            <UpworkButton />
            <ResumeButton />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default ContactSection;
