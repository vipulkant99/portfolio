import React from "react";
import { ScrollAnimation } from "../../ScrollAnimation";
import { HiOutlineMail } from "react-icons/hi";
import { socials } from "../../../util/constants";

const SocialCard = ({ title, description, icon, index, href, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex flex-col py-12 relative group dark:border-neutral-800 ${
      index % 4 !== 3 ? "lg:border-r" : ""
    } ${
      index < 4 ? "lg:border-b" : ""
    } ${
      index % 4 === 0 ? "lg:border-l" : ""
    } border-b md:border-b-0 transition-colors duration-300`}
  >
    <div className={`opacity-0 group-hover:opacity-100 transition duration-300 group absolute inset-0 h-full w-full bg-gradient-to-t pointer-events-none ${color} to-transparent ${
      index >= 4 ? "bg-gradient-to-b" : ""
    }`} />
    
    <div className="mb-6 relative z-10 px-10 text-slate-800 dark:text-slate-200">
      {icon}
    </div>
    
    <div className="text-xl font-semibold mb-2 relative z-10 px-10">
      <div className="absolute left-0 inset-y-0 h-8 w-1.5 rounded-tr-full rounded-br-full bg-neutral-200 dark:bg-neutral-800 group-hover:bg-indigo-500 transition-all duration-300" />
      <span className="group-hover:translate-x-3 transition-transform duration-300 inline-block text-slate-900 dark:text-white font-space-grotesk">
        {title}
      </span>
    </div>
    
    <p className="text-sm text-slate-500 dark:text-neutral-400 max-w-xs relative z-10 px-10 leading-relaxed font-inter">
      {description}
    </p>
  </a>
);

function SocialGridSection() {
  return (
    <section id="connect" className="relative py-20 overflow-hidden bg-white dark:bg-black">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <div className="mx-4 mt-16 flex flex-wrap items-center justify-center gap-2 md:mx-16">
                      <HiOutlineMail className="h-16 w-16 text-indigo-600 sm:h-20 sm:w-20 dark:text-indigo-400" />
                      <h1 className="font-space-grotesk text-center text-3xl tracking-normal text-slate-800 sm:text-4xl sm:tracking-wide md:text-5xl lg:text-6xl dark:text-slate-100">
                        Let's Connect
                      </h1>
                    </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl pt-4 text-2xl">
              I'm open to interesting projects and collaborations. Feel free to reach out through any of these platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
            {socials.map((social, index) => (
              <SocialCard key={index} {...social} index={index} />
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default SocialGridSection;
