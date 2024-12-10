import React from "react";
import { useForm, ValidationError } from "@formspree/react";

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
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-slate-700 border px-6 py-4 rounded-lg shadow-lg "
    >
      <label htmlFor="name" className="block text-gray-700 mb-2">
        Name
      </label>
      <input
        id="name"
        type="name"
        name="name"
        placeholder="Enter your Name"
        className="w-full p-3 border bg-slate-900 rounded-lg mb-4"
        required
      />
      <ValidationError prefix="Name" field="Name" errors={state.errors} />

      <label htmlFor="email" className="block text-gray-700 mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full p-3 border bg-slate-900 rounded-lg mb-4"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="block text-gray-700 mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        className="w-full p-3 border bg-slate-900 rounded-lg mb-4"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="text-white py-20" id="contact">
      <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
      <ContactForm />
    </div>
  );
}

export default App;
