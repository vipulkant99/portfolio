import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import WorkSection from "./WorkSection";
import { EducationTimeline } from "../../../util/constants";

function EducationSection() {
  return (
    <div
      id="education"
      className="relative bg-black overflow-hidden flex flex-col"
    >
      <div className="flex flex-col gap-8 items-center justify-center mt-28 mb-8">
        <div className="relative border-l-2 border-gray-300 pl-6">
          {/*timeline line*/}
          <div className="flex gap-8 items-center justify-center">
            {/* div Education */}
            <HiOutlineAcademicCap size={64} color="white" />
            <h1 className="text-6xl underline text-slate-300  font-space-grotesk tracking-wide">
              Education
            </h1>
          </div>
          {EducationTimeline.map((item) => {
            return (
              <div className="relative mb-10 ml-4 flex items-start mt-16">
                <div className="absolute -left-30 -top-2 text-right w-12 text-3xl font-semibold text-stone-200">
                  {item.start}
                </div>
                <div className="absolute w-3 h-3 bg-[#4f46e5] rounded-full -left-12 top-1.5" />
                <div className="pl-6 border border-neutral-100 py-4 px-8 rounded-2xl max-w-[800px] w-screen shadow-lg shadow-neutral-100/50">
                  <h3 className="m-0 text-3xl font-bold text-stone-300 tracking-wide">
                    {item.degree}
                  </h3>
                  <p className="my-1 text-lg text-gray-200">
                    GLA Univerity, {item.time}
                  </p>
                </div>
              </div>
            );
          })}
          <section id="experience">
            <WorkSection />
          </section>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
