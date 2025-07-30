import { AiOutlineTool } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { TbTool } from "react-icons/tb";
import { MovingCards } from "../Components/MovingCards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

function AboutSection() {
  const techstacks = [
    {
      name: "Dart",
      src: "/techstack/dart.svg",
    },
    {
      name: "Javascript",
      src: "/techstack/js.svg",
    },
    {
      name: "Python",
      src: "/techstack/python.svg",
    },
    {
      name: "HTML",
      src: "/techstack/html.svg",
    },
    {
      name: "CSS",
      src: "/techstack/css.svg",
    },
    {
      name: "Tailwind CSS",
      src: "/techstack/tailwind.svg",
    },
    {
      name: "Flutter",
      src: "/techstack/flutter.svg",
    },
    {
      name: "Node.js",
      src: "/techstack/node.svg",
    },
    {
      name: "Express.js",
      src: "/techstack/expressjs.svg",
    },
    {
      name: "React.js",
      src: "/techstack/reactjs.svg",
    },

    {
      name: "Mongo DB",
      src: "/techstack/mongo.svg",
    },
    {
      name: "MySQL",
      src: "/techstack/sql.svg",
    },
    {
      name: "Firebase",
      src: "/techstack/firebase.svg",
    },
    {
      name: "Supabase",
      src: "/techstack/supabase.svg",
    },
    {
      name: "Git",
      src: "/techstack/git.svg",
    },
    {
      name: "Github",
      src: "/techstack/github.svg",
    },
  ];
  return (
    <div
      id="about"
      className="relative bg-black h-screen overflow-hidden flex flex-col "
    >
      <div className="text-slate-300 flex gap-8 items-center justify-center mx-16 mt-28">
        <BsPersonCircle size={64} color="white" />
        <h1 className="text-6xl underline font-space-grotesk tracking-wide">
          About
        </h1>
      </div>
      <p className="text-slate-300 ml-40 mr-42 font-inter mt-8 text-center">
        Software Developer with 2+ years of experience building scalable
        cross-platform mobile applications using Flutter and Dart. Proficient in
        backend development with Node.js, REST API design, and cloud services
        including Firebase and Google Cloud Platform. Experienced in state
        management tools such as Provider and BLoC for mobile app development.
        Skilled in version control using Git, with strong problem-solving,
        communication, and teamwork skills. Passionate about integrating AI/ML
        technologies to deliver innovative software solutions.
      </p>
      {/* <div className="text-slate-300 flex gap-8 items-center justify-items-start mx-16 mt-16">
        <AiOutlineTool size={50} color="white" />
        <h1 className="text-6xl underline font-space-grotesk tracking-wide">
          Technical Skills :-
        </h1>
      </div> */}
      <div
        id="skills"
        className="text-slate-300 flex gap-8 items-center justify-center mx-16 mt-16"
      >
        <AiOutlineTool size={50} color="white" />
        <h1 className="text-6xl underline font-space-grotesk tracking-wide">
          Technical Skills
        </h1>
      </div>
      {/* <div className="bg-white flex w-fit items-center gap-2 p-2 rounded-2xl">
        <img src="/techstack/github.svg" alt="aa" className="h-10 w-10" />
        <h3 className="font-space-grotesk text-2xl"> Github</h3>
      </div> */}
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-10 w-fit mx-auto">
        <MovingCards items={techstacks} direction="right" speed="medium" />
        <MovingCards items={techstacks} direction="left" speed="medium" />
      </div>
    </div>
  );
}

export default AboutSection;
