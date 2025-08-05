import BackgroundGradient from "../Components/BackgroundGradient";
import { ContainerTextFlip } from "../Components/ContainerTextFlip";
import HeroButton from "../Components/HeroButton";
import { TypewriterEffectSmooth } from "../Components/TextTypeWriter";

function HeroSection() {
  const words = [
    {
      text: "Vipul",
    },
    {
      text: "Kant",
    },
    {
      text: "Chaturvedi.",
    },
  ];

  return (
    <BackgroundGradient className="flex h-3/4 items-center justify-center rounded-[22px] bg-neutral-100 p-12 dark:bg-neutral-900">
      <div className="flex flex-col items-center">
        <TypewriterEffectSmooth words={words} />
        {/* <span className="text-8xl text-stone-300 tracking-wide text-shadow-lg text-shadow-white/50">
          Vipul Kant Chaturvedi
        </span> */}
        <ContainerTextFlip />
        <HeroButton
          className="mt-8 px-8 py-2 text-3xl"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let's Explore
        </HeroButton>
      </div>
      {/* <img
        src="/profile_pic.jpg"
        alt="profilePic"
        className="h-1/2 w-1/4 rounded-4xl"
      /> */}
    </BackgroundGradient>
  );
}

export default HeroSection;
