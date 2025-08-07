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
    <BackgroundGradient className="flex w-full items-center justify-center rounded-[22px] bg-neutral-100 px-4 py-12 dark:bg-neutral-900">
      <div className="flex w-full max-w-screen-xl flex-col items-center px-4 text-center sm:px-6 md:px-8">
        <div className="w-full break-words">
          <TypewriterEffectSmooth words={words} />
        </div>

        <div className="w-full overflow-x-auto">
          <ContainerTextFlip />
        </div>

        <HeroButton
          className="mt-8 px-6 py-2 text-xl sm:text-2xl md:text-3xl"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let's Explore
        </HeroButton>
      </div>
    </BackgroundGradient>
  );
}

export default HeroSection;
