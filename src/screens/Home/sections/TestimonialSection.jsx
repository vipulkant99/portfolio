import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { ScrollAnimation } from "../../ScrollAnimation";
import { testimonialData } from "../../../util/constants";

function TestimonialSection() {
  return (
    <div
      id="testimonial"
      className="relative bg-black overflow-hidden flex flex-col"
    >
      <ScrollAnimation>
        <div className="text-slate-300 flex gap-8 items-center justify-center mx-16 mt-28">
          <HiOutlineChatBubbleLeftRight size={64} color="#fff" />
          <h1 className="text-6xl underline text-slate-300  font-space-grotesk tracking-wide">
            Testimonials
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-16 mb-12">
          {testimonialData.map((data) => (
            <div className="group w-md  flex flex-col items-start justify-start hover:shadow-lg hover:shadow-neutral-400/50 hover:rounded-xl mx-8 my-6">
              <h4 className="group-hover:ml-4 text-white font-light font-space-grotesk text-md">
                {data.info}
              </h4>
              <div className="flex items-start mt-auto pt-4 group-hover:ml-4">
                <img
                  src={data.img}
                  alt={data.name}
                  className="h-14 w-14 object-contain rounded-full"
                />
                <div className="flex flex-col flex-grow justify-center items-start">
                  <h3 className="ml-4 text-white font-bold font-space-grotesk text-2xl">
                    {data.name}
                  </h3>
                  <p className="text-neutral-400 pt-1 text-md ml-4 group-hover:mb-4 ">
                    {data.title}
                  </p>
                </div>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/socials/linkedin.svg"
                    alt="aditya"
                    className="h-8 w-8 object-contain rounded-full ml-2 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default TestimonialSection;
