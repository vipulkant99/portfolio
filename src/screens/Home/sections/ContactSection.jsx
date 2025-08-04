import { HiOutlineMail } from "react-icons/hi";
import { ScrollAnimation } from "../../ScrollAnimation";
import FormPart from "../Components/FormPart";
import { HiArrowRight } from "react-icons/hi2";
import LinkedinButton from "../Components/LinkedinButton";
import GithubButton from "../Components/GithubButton";
import RedditButton from "../Components/RedditButton";

function ContactSection() {
  return (
    <div
      id="testimonial"
      className="relative bg-black overflow-hidden flex flex-col"
    >
      <ScrollAnimation>
        <div className="text-slate-300 flex gap-8 items-center justify-center mx-16 mt-16">
          <HiOutlineMail size={64} color="#fff" />
          <h1 className="text-6xl underline text-slate-300  font-space-grotesk tracking-wide">
            Contact
          </h1>
        </div>
        <div className="grid grid-cols-[1fr_1px_1fr] gap-2 mt-16 mb-12">
          <FormPart />
          <div className="h-full w-[1px] bg-gradient-to-b from-neutral-900 via-cyan-400 to-neutral-900"></div>
          <div className="ml-16">
            <p className="text-neutral-400 w-3/4 text-xl tracking-tight">
              I’m open to exciting new opportunities. Got a question or just
              want to connect? Feel free to click that button and reach out!
            </p>
            <LinkedinButton />
            <GithubButton />
            <RedditButton />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default ContactSection;
