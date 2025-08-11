import { useForm } from "react-hook-form";
import HeroButton from "./HeroButton";
import { clientMail } from "../../../Services/supabase";
import { useClientMail } from "../hook/useClientMail";

function FormPart() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { sendMail, isPending } = useClientMail();

  function onSubmit(data) {
    sendMail(data, { onSettled: () => reset() });
  }
  function onError(errors) {}

  return (
    <div className="mx-4 md:ml-16">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex w-full flex-col items-start justify-start">
          <label
            htmlFor="name"
            className="font-inter mb-2 text-sm font-semibold text-slate-800 md:text-base dark:text-neutral-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            disabled={isPending}
            {...register("name", { required: "This field is required" })}
            className="w-full rounded-md border-2 border-neutral-600 px-4 py-2 text-black outline-none placeholder:text-neutral-500 focus:border-cyan-600 md:w-3/4 dark:border-2 dark:text-white dark:focus:border-cyan-300"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="mt-8 flex w-full flex-col items-start justify-start">
          <label
            htmlFor="email"
            className="font-inter mb-2 text-sm font-semibold text-slate-800 md:text-base dark:text-neutral-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            disabled={isPending}
            placeholder="Enter Your Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="w-full rounded-md border-2 border-neutral-600 px-4 py-2 text-black outline-none placeholder:text-neutral-500 focus:border-cyan-600 md:w-3/4 dark:text-white dark:focus:border-cyan-300"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mt-8 flex w-full flex-col items-start justify-start">
          <label
            htmlFor="subject"
            className="font-inter mb-2 text-sm font-semibold text-slate-800 md:text-base dark:text-neutral-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            disabled={isPending}
            placeholder="What it is about?"
            {...register("subject", { required: "This field is required" })}
            className="w-full rounded-md border-2 border-neutral-600 px-4 py-2 text-black outline-none placeholder:text-neutral-500 focus:border-cyan-600 md:w-3/4 dark:text-white dark:focus:border-cyan-300"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="mt-6 flex w-full flex-col items-start justify-start">
          <label
            htmlFor="message"
            className="font-inter mb-2 text-sm font-semibold text-slate-800 md:text-base dark:text-neutral-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            disabled={isPending}
            placeholder="Enter Your Message Here...."
            {...register("message", { required: "This field is required" })}
            className="w-full rounded-md border-2 border-neutral-600 px-4 py-2 text-black outline-none placeholder:text-neutral-500 focus:border-cyan-600 md:w-3/4 dark:text-white dark:focus:border-cyan-300"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>
        <HeroButton
          // onClick={() => setCurrentProject(project)}
          className="mt-6 cursor-pointer px-4 py-2 text-lg md:mt-10"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Send Message"}
        </HeroButton>
      </form>
    </div>
  );
}

export default FormPart;
