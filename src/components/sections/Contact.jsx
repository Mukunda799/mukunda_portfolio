import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

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
      className="relative py-20 sm:py-28 flex items-center justify-center px-4 text-white section-gradient"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[150px] pointer-events-none" />

      <RevealOnScroll>
        <div className="w-full max-w-lg glass-card p-6 sm:p-8 md:p-10 relative z-10">
          {!isSubmitted ? (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2 gradient-text">
                Let&apos;s Connect
              </h2>
              <p className="text-white/40 text-center text-sm mb-8">
                I&apos;d love to hear from you! Fill out the form below.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 hover:border-white/15"
                    placeholder="Your Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 hover:border-white/15"
                    placeholder="Your Email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 hover:border-white/15 resize-none"
                    placeholder="Your Message..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="glow-btn w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20"
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-5 py-8">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircleIcon className="w-12 h-12 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Thank You!</h3>
              <p className="text-white/50 text-center text-sm">
                Your message has been successfully sent. I&apos;ll get back to
                you soon!
              </p>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
