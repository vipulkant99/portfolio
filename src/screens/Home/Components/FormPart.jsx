import HeroButton from "./HeroButton";

function FormPart() {
  return (
    <div className="ml-16">
      <form>
        <div className="flex w-full flex-col items-start justify-start">
          <label
            htmlFor="name"
            className="font-inter mb-2 font-semibold text-slate-800 dark:text-neutral-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="w-3/4 rounded-md border-2 border-neutral-600 px-4 py-2 text-black outline-none placeholder:text-neutral-500 focus:border-cyan-600 dark:border-2 dark:text-white dark:focus:border-cyan-300"
          />
        </div>
        <div className="mt-8 flex w-full flex-col items-start justify-start">
          <label
            htmlFor="email"
            className="font-inter mb-2 font-semibold text-slate-800 dark:text-neutral-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="w-3/4 rounded-md border-2 border-neutral-600 px-4 py-2 text-black outline-none placeholder:text-neutral-500 focus:border-cyan-600 dark:text-white dark:focus:border-cyan-300"
          />
        </div>
        <div className="mt-8 flex w-full flex-col items-start justify-start">
          <label
            htmlFor="subject"
            className="font-inter mb-2 font-semibold text-slate-800 dark:text-neutral-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="What it is about?"
            className="w-3/4 rounded-md border-2 border-neutral-600 px-4 py-2 text-black outline-none placeholder:text-neutral-500 focus:border-cyan-600 dark:text-white dark:focus:border-cyan-300"
          />
        </div>
        <div className="mt-6 flex w-full flex-col items-start justify-start">
          <label
            htmlFor="message"
            className="font-inter mb-2 font-semibold text-slate-800 dark:text-neutral-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Enter Your Message Here...."
            className="w-3/4 rounded-md border-2 border-neutral-600 px-4 py-2 text-black outline-none placeholder:text-neutral-500 focus:border-cyan-600 dark:text-white dark:focus:border-cyan-300"
          />
        </div>
        <HeroButton
          // onClick={() => setCurrentProject(project)}
          className="mt-10 cursor-pointer px-4 py-2 text-lg"
        >
          Send Message
        </HeroButton>
      </form>
    </div>
  );
}

export default FormPart;
