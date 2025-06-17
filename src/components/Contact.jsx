import { useForm, ValidationError } from "@formspree/react";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaMessage, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqakodrl");

  if (state.succeeded) {
    return (
      <p className="text-center text-green-500">
        Thanks for reaching out! We'll get back to you soon.
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-[900px] md:border-4 border-fuchsia-300 px-6 py-4 rounded-3xl bg-gray-900"
      >
        <div className="relative">
          <FaUser className="absolute mt-6 text-white text-2xl  transform -translate-y-1/2" />

          <input
            id="name"
            type="name"
            name="name"
            placeholder="Name"
            className="bg-transparent pl-10 w-full p-3 border-b-4 border-fuchsia-300 focus:border-fuchsia-500 outline-none placeholder:text-slate-100 text-2xl mb-8"
            required
          />
        </div>
        <ValidationError prefix="Name" field="Name" errors={state.errors} />

        <div className="relative">
          <MdEmail className="absolute mt-6 text-white text-2xl  transform -translate-y-1/2" />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="bg-transparent pl-10 w-full p-3 border-b-4 border-fuchsia-300 focus:border-fuchsia-500 outline-none placeholder:text-slate-100 text-2xl mb-8"
            required
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <div className="relative">
          <FaMessage className="absolute text-white mt-6 ml- text-2xl  transform -translate-y-1/2" />

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="bg-transparent pl-10 w-full p-3 border-b-4 border-fuchsia-300 focus:border-fuchsia-500 outline-none placeholder:text-slate-100 text-2xl mb-6"
            required
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className=" bg-fuchsia-500 hover:bg-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg sm:w-auto"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

function App() {
  return (
    <>
      <div
        className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500"
        id="contact"
      >
        <h2 className=" text-4xl md:text-5xl font-bold text-center text-fuchsia-500 md:mb-6 mb-2 hover:animate-pulse">
          CONTACT ME
        </h2>
        <MdConnectWithoutContact className="text-6xl ml-4 md:mb-6 mb-20 md:mt-0 mt-8 text-white animate-spin slow-spin " />
      </div>

      <ContactForm />
    </>
  );
}

export default App;
