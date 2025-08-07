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
        <div className="mx-16 mt-16 flex items-center justify-center gap-8 text-slate-300">
          <HiOutlineMail size={64} color={isDark ? "white" : "black"} />
          <h1 className="font-space-grotesk text-6xl tracking-wide text-slate-800 underline dark:text-slate-300">
            Contact
          </h1>
        </div>
        <div className="mt-16 mb-12 grid grid-cols-[1fr_1px_1fr] gap-2">
          <FormPart />
          <div className="h-full w-[1px] bg-gradient-to-b from-neutral-900 via-cyan-400 to-neutral-900"></div>
          <div className="ml-16">
            <p className="w-3/4 text-xl tracking-tight text-slate-800 dark:text-neutral-400">
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
