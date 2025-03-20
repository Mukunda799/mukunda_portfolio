import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black-to-r from-cyan-700 to-blue-900 text-white"
    >
      <RevealOnScroll>
        <div className="w-full max-w-lg px-8 py-10 bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800/30 transition-all duration-500">
          {!isSubmitted ? (
            <>
              <h2 className="text-4xl font-bold text-center mb-6 text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
                Let's Connect
              </h2>
              <p className="text-gray-300 text-center mb-6">
                I'd love to hear from you! Fill out the form below.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-gray-800/40 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your Name"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-gray-800/40 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your Email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-gray-800/40 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your Message..."
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4 transition-all duration-500">
              <CheckCircleIcon className="w-20 h-20 text-green-400 animate-bounce" />
              <h3 className="text-3xl font-semibold text-white">Thank You!</h3>
              <p className="text-gray-300 text-center">
                Your message has been successfully sent. I'll get back to you soon!
              </p>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
