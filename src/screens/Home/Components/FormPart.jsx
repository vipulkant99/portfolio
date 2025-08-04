import HeroButton from "./HeroButton";

function FormPart() {
  return (
    <div className="ml-16">
      <form>
        <div className="flex flex-col items-start justify-start w-full">
          <label
            htmlFor="name"
            className="text-neutral-300 mb-2 font-semibold font-inter"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="text-white placeholder:text-neutral-500 border border-neutral-600 rounded-md px-4 py-2 outline-none focus:border-cyan-300 w-3/4"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full mt-8">
          <label
            htmlFor="email"
            className="text-neutral-300 mb-2 font-semibold font-inter"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="text-white placeholder:text-neutral-500 border border-neutral-600 rounded-md px-4 py-2 outline-none focus:border-cyan-300 w-3/4"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full mt-8">
          <label
            htmlFor="subject"
            className="text-neutral-300 mb-2 font-semibold font-inter"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="What it is about?"
            className="text-white placeholder:text-neutral-500 border border-neutral-600 rounded-md px-4 py-2 outline-none focus:border-cyan-300 w-3/4"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full mt-6">
          <label
            htmlFor="message"
            className="text-neutral-300 mb-2 font-semibold font-inter"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Enter Your Message Here...."
            className="text-white placeholder:text-neutral-500 border border-neutral-600 rounded-md px-4 py-2 outline-none focus:border-cyan-300 w-3/4"
          />
        </div>
        <HeroButton
          // onClick={() => setCurrentProject(project)}
          className="px-4 py-2 text-lg mt-10 cursor-pointer"
        >
          Send Message
        </HeroButton>
      </form>
    </div>
  );
}

export default FormPart;
