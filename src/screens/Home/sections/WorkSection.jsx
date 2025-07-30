import { useState } from "react";
import { RiBriefcase2Fill } from "react-icons/ri";

const workTimeline = [
  {
    index: 0,
    start: "2021",
    time: "August 2021 - January 2022",
    company: "Freelance",
    title: "Mobile Application Developer",
    content: [
      "Designed and built a mobile app for IoT-based green roof plantation monitoring.",
      "Integrated real-time sensor data (e.g., moisture, temperature) using Firebase Realtime Database.",
      "Visualized live environmental metrics within the app through dynamic, user-friendly dashboards.",
      "Implemented Firebase Authentication for secure, end-to-end access with email/password login and session handling.",
    ],
  },
  {
    index: 1,
    start: "2022",
    time: "February 2022 – February 2024",
    company: "ESPARSE MATRIX SOLUTIONS PVT LTD",
    title: "Junior Flutter Developer",
    content: [
      "Led end-to-end development of mobile applications integrating Firebase Authentication, Storage, and cloud functions.",
      "Published and maintained 2+ apps on App Store and Google Play Store.",
      "Integrated and prototyped Agora Video Calling API; discontinued due to technical challenges",
      "Collaborated with backend teams to ensure seamless API integration and real-time data synchronization.",
    ],
  },
];

function WorkSection() {
  const [curretIndex, setCurrentIndex] = useState(null);
  return (
    <div id="experience">
      {/* Work Experience */}
      <div className="flex gap-8 items-center justify-start">
        {/* div Education */}
        <RiBriefcase2Fill size={64} color="white" />
        <h1 className="text-6xl underline text-slate-300  font-space-grotesk tracking-wide">
          Work Experience
        </h1>
      </div>
      {workTimeline.map((item) => {
        return (
          <div className="relative mb-10 ml-4 flex items-start mt-16">
            <div className="absolute -left-30 -top-2 text-3xl text-right w-12 font-semibold text-stone-200">
              {item.start}
            </div>
            <div className="absolute w-3 h-3 bg-[#4f46e5] rounded-full -left-12 top-1.5" />
            <div className="pl-6 border border-stone-100 py-4 px-8 rounded-lg max-w-[1200px] w-screen">
              <h3 className="m-0 text-3xl tracking-wide font-bold text-stone-300">
                {item.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="my-1 text-lg text-gray-200">
                  {item.company}, {item.time}
                </p>
                <button
                  className="bg-cyan-300 text-stone-900 rounded-full px-4 py-2"
                  onClick={() =>
                    setCurrentIndex((index) =>
                      item.index === index ? null : item.index
                    )
                  }
                >
                  {curretIndex === item.index ? "Show Less" : "Show More"}
                </button>
              </div>
              {curretIndex === item.index && (
                <span>
                  <div className="border border-gray-100 mt-8" />
                  <ul className="list-disc list-inside text-slate-200 space-y-2 mt-8">
                    {item.content.map((desc) => {
                      return <li>{desc}</li>;
                    })}
                  </ul>
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkSection;
